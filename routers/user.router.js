const express = require('express')
const userRouter = express.Router()
const { register, login } = require('../controllers/user.controller')
const { checkStation } = require('../middleware/Validate/validation')

userRouter.post('/register', register)
userRouter.post('/login', login)

module.exports = {
    userRouter,
}