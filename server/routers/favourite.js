const express = require('express')
const FavouriteController = require('../controllers/favouriteController')
const authentication = require('../middleware/authentication')
const favouriteRouter = express.Router()

favouriteRouter.use(authentication)
favouriteRouter.get("/favourite", FavouriteController.getAllFavourite)
favouriteRouter.post("/favourite/:id", FavouriteController.addFavourite)
favouriteRouter.delete("/favourite/:id", FavouriteController.removeFavourite)

module.exports = favouriteRouter