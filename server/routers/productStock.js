const express = require('express')
const ProductStockController = require('../controllers/productStockController')
const productStockRouter = express.Router()

productStockRouter.get("/productstock", ProductStockController.getAllProductStock)
productStockRouter.get("/productstock/:id", ProductStockController.getStockById)

module.exports = productStockRouter