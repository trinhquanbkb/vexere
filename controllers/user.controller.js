const { Users } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const gravatarUrl = require('gravatar-url')

//Create
const register = async (req, res) => {
    const { name, email, numberPhone, password } = req.body
    try {
        //avatar default được tạo bởi email phù hợp
        const avatarDefault = gravatarUrl(email)
        //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán salt
        const salt = bcrypt.genSaltSync(10)
        //generate password
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await Users.create({ name, email, numberPhone, password: hashPassword, avatar: avatarDefault })
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await Users.findOne({
            where: {
                email: email
            }
        })
        if (user) {
            //giải băm mật khẩu và trả về true hoặc false
            const isAuthen = bcrypt.compareSync(password, user.dataValues.password)
            if (isAuthen === true) {
                //đăng nhập sẽ nhận được token
                const token = jwt.sign({email: user.email, type: user.type}, "trinhhoangquan", { expiresIn: 60*60})
                res.status(200).send({message: "Success", token})
            } else {
                res.status(400).send(`Password is not exist`)
            }
        }
    } catch (error) {
        res.status(400).send(`Email is not exist`)
    }
}

const upload = async(req, res) => {
    const { file } = req
    const { user } = req
    try {
        const findUser = await Users.findOne({
            where: {
                email: user.email,
            }
        })
        if(findUser){
            const data = {
                name :findUser.dataValues.name,
                email: findUser.dataValues.email,
                numberPhone:findUser.dataValues.numberPhone,
                password: findUser.dataValues.password,
                type: findUser.dataValues.type,
                avatar: `localhost:3000/${file.path}`
            }
            const addImage = await Users.update(data, {
                where: {
                    email: user.email,
                },
            })
        }
        else{
            throw new Error('Cannot add image')
        }
        res.status(200).send('upload image success')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    register,
    login,
    upload,
}