const express = require('express')
const userRouter = express.Router()
const { register, login, upload } = require('../controllers/user.controller')
const { uploadImage } = require('../middleware/upload/uploadImage')
const { authenticate } = require('../middleware/Auth/authenticate')

userRouter.post('/register', register)
userRouter.post('/login', login)
userRouter.post('/upload-image', authenticate, uploadImage("user") , upload)

module.exports = {
    userRouter,
}