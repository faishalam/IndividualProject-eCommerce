const express = require('express')
const authentication = require('../middleware/authentication')
const HistoryController = require('../controllers/historyController')
const historyRouter = express.Router()

historyRouter.use(authentication)
historyRouter.get("/history", HistoryController.getAllHistory)


module.exports = historyRouter