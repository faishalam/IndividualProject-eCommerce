const express = require('express')
const UserController = require('../controllers/userController')
const userRouter = express.Router()


userRouter.post("/register", UserController.register)
userRouter.post("/login", UserController.login)
userRouter.post("/login/auth/google", UserController.googleAuth)


module.exports = userRouter