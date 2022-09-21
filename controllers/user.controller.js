const { Users } = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { name, email, numberPhone, password } = req.body
    try {
        //tạo ra một chuỗi 10 số ngẫu nhiên bằng thuật toán sált
        const salt = bcrypt.genSaltSync(10)
        //generate password
        const hashPassword = bcrypt.hashSync(password, salt)
        const newUser = await Users.create({ name, email, numberPhone, password: hashPassword })
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
                const token = jwt.sign({email: user.email, type: user.type}, "trinhhoangquan", { expiresIn: 2*60})
                res.status(200).send({message: "Success", token})
            } else {
                res.status(400).send(`Password is not exist`)
            }
        }
    } catch (error) {
        res.status(400).send(`Email is not exist`)
    }
}

module.exports = {
    register,
    login,
}