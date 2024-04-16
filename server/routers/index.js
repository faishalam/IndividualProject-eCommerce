const express = require('express')
const userRouter = require('./user')
const favouriteRouter = require('./favourite')
const productRouter = require('./product')
const chartRouter = require('./cart')
const historyRouter = require('./history')
const productStockRouter = require('./productStock')

const router = express.Router()

router.use("/", productStockRouter)
router.use("/", userRouter)
router.use("/", productRouter)
router.use("/", favouriteRouter)
router.use("/", chartRouter)
router.use("/", historyRouter)




module.exports = router