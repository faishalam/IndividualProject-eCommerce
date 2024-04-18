const midtransClient = require('midtrans-client');
const { Cart, Product, Order, ProductStock } = require("../models");
const { nanoid } = require("nanoid");
const axios = require('axios')

class PaymentController {
    static async getMidtransToken(req, res) {
        try {
            const response = await Cart.findAll({
                where: {
                    userId: req.user.id,
                    payment: false
                },
                include: {
                    model: Product
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })

            const price = response?.reduce((total, item) => {
                return total + item.Product.price * item.jumlah
            }, 0)

            const snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: 'SB-Mid-server-PfxQnJUXtDA8RCzg8qKEtnK2'
            });

            const orderId = `trx-ua${nanoid()}`

            await Order.create({
                orderId,
                userId: req.user.id,
                price: price
            })

            const parameter = {
                "transaction_details": {
                    "order_id": orderId,
                    "gross_amount": price
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "first_name": req.user.name,
                    "email": req.user.email,
                }
            };

            const transaction = await snap.createTransaction(parameter)

            res.json({ transaction_token: transaction.token, orderId })
        } catch (error) {
            console.log(error)
        }
    }

    static async payment(req, res) {
        try {
            const order = await Order.findOne({ where: { orderId: req.body.orderId } })
            if (!order) throw { name: 'notFound', message: 'Order not found' }


            const base64 = Buffer.from('SB-Mid-server-PfxQnJUXtDA8RCzg8qKEtnK2').toString('base64')
            const { data } = await axios(`https://api.sandbox.midtrans.com/v2/${req.body.orderId}/status`, {
                headers: {
                    Authorization: `Basic ${base64}`
                }
            })

            if (Number(data.status_code) !== 200) throw { name: 'badRequest', message: 'transaction is not successfull' }
            if (data.transaction_status !== 'capture') throw { name: 'badRequest', message: 'transaction is not successfull' }

            await order.update(
                {
                    status: 'paid',
                    cart: req.body.cartId,
                    name: req.body.form.name,
                    phone: req.body.form.phone,
                    address: req.body.form.address,
                    paidDate: new Date()
                }
            )

            await Cart.update(
                { payment: true },
                { where: { userId: req.user.id } }
            );

            const cart = await Cart.findAll({
                where: {
                    id: req.body.cartId,
                    payment: true
                },
                include: {
                    model: Product
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            })

            const productId = cart.map(item => item.productId)
            const jumlah = cart.map(item => item.jumlah)
            const size = cart.map(item => item.size)

            const cekStock = await ProductStock.findAll({
                where: {
                    productId: productId
                }
            })


            for (let i = 0; i < cekStock.length; i++) {
                console.log(cekStock[i].dataValues[size[0]], '<<<')
                if (cekStock[i].dataValues[size[0]]) {
                    await ProductStock.update(
                        { [size[0]]: cekStock[i].dataValues[size[0]] - jumlah[0] }, { where: { productId: productId[i] } })
                }
            }

            res.status(200).json({ message: 'success' })
        } catch (error) {
            console.log(error)
        }
    }
}



module.exports = PaymentController