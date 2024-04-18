const express = require('express')
const PaymentController = require('../controllers/paymentController')
const paymentRouter = express.Router()

paymentRouter.get('/payment/midtrans/token', PaymentController.getMidtransToken)
paymentRouter.patch('/payment/midtrans', PaymentController.payment)


module.exports = paymentRouter