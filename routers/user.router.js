const express = require('express')
const userRouter = express.Router()
const { register } = require('../controllers/user.controller')
const { checkStation } = require('../middleware/validation')

userRouter.post('/register', register)

module.exports = {
    userRouter,
}