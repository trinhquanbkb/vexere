const { Users } = require('../models')
const bcrypt = require('bcryptjs')

const register = async(req, res) => {
    const {name, email, numberPhone, password} = req.body
    try {
        console.log('1')
        const newUser = await Users.create({name, email, numberPhone, password, type: "user"})
        res.status(201).send(newUser)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    register,
}