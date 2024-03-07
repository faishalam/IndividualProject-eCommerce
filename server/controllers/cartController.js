const { Product, Cart } = require("../models")


class CartController {
    static async addToCart(req, res) {
        try {
            const { id } = req.user
            const productId = req.params.id

            const checkProduct = await Product.findOne({ where: { id: productId } })
            if (!checkProduct) return res.status(404).json({ message: "Product not found" })

            const checkCart = await Cart.findOne({ where: { userId: id, productId: productId } })
            if (checkCart) return res.status(404).json({ message: "Product already in cart" })

            const addToCart = await Cart.create({
                userId: id,
                productId: productId,
                jumlah: + 1,
                payment: false
            })

            res.status(201).json(addToCart)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async getAllCart(req, res) {
        try {
            const { id } = req.user
            const response = await Cart.findAll({
                where: { 
                    userId: id,
                    payment: false
                },
                include: {
                    model: Product
                }
            })

            if (response.length === 0) return res.status(404).json({ message: "Cart not found" })
            if (!response) return res.status(404).json({ message: "Cart not found" })

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async removeChart(req, res) {
        try {
            const { id } = req.user
            const productId = req.params.id

            const checkProduct = await Product.findOne({ where: { id: productId } })
            if (!checkProduct) return res.status(404).json({ message: "Cart not found" })

            const checkCart = await Cart.findOne({ where: { userId: id, productId: productId } })
            if (!checkCart) return res.status(404).json({ message: "Cart not in favourite" })

            await Cart.destroy({ where: { userId: id, productId: productId } })
            res.status(200).json({ message: "Product removed from cart" })
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }

    static async updateChart(req, res) {
        try {
            const { id } = req.user
            const productId = req.params.id

            const checkCart = await Cart.findOne({ where: { userId: id, productId: productId } })
            if (!checkCart) return res.status(404).json({ message: "Cart not found" })

            await Cart.update(
                { payment: true}, 
                { where: { userId: id, productId: productId } }
              );
            res.status(200).json(checkCart)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

module.exports = CartController