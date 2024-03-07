const express = require('express')
const authentication = require('../middleware/authentication')
const CartController = require('../controllers/cartController')
const chartRouter = express.Router()

chartRouter.use(authentication)
chartRouter.get("/cart", CartController.getAllCart)
chartRouter.post("/cart/:id", CartController.addToCart)
chartRouter.delete("/cart/:id", CartController.removeChart)
chartRouter.patch("/cart/:id", CartController.updateChart)

module.exports = chartRouter