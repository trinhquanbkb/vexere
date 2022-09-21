const express = require('express')
const userRouter = express.Router()
const { register, login, uploadImage } = require('../controllers/user.controller')
const { checkStation } = require('../middleware/Validate/validation')

userRouter.post('/register', register)
userRouter.post('/login', login)

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, ('./public/images'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname)
    }
})
const upload = multer({ storage: storage })
userRouter.post('/upload-image', upload.single('avatar'), uploadImage)

module.exports = {
    userRouter,
}