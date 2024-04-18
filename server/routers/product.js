const express = require('express')
const ProductController = require('../controllers/productController')
const productRouter = express.Router()

productRouter.get("/product", ProductController.getAllProduct)
productRouter.get("/product/:id", ProductController.getProductById)

module.exports = productRouter