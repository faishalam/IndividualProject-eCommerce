const express = require('express')
const userRouter = require('./user')
const router = express.Router()

router.use("/", userRouter)


module.exports = router