const { Tickets, sequelize } = require('../models')
const { Users } = require('../models')
const { Seats } = require('../models')
const { QueryTypes, DATE, DataTypes } = require('sequelize');

const buyTicket = async (req, res) => {
    try {
        const { id } = req.params
        const { seatId } = req.body
        const { user } = req
        const findUser = await Users.findOne({
            where: {
                email: user.email,
            }
        })
        const results = await sequelize.query(`SELECT * FROM vexere.seats where id = ${seatId}`);
        if ((results[0])[0].id) {
            const t = new Date(UNIX_Timestamp * 1000);
            const ticket = await sequelize.query(`UPDATE vexere.tickets SET userId = ${findUser.dataValues.id}
                ,status=1, seatId=${(results[0])[0].id}, updatedAt = ${t} WHERE id = ${id}`)
            if (ticket) {
                res.status(201).send('Buy ticket success')
            }
            else {
                throw new Error('Cannot buy ticket')
            }
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    buyTicket,
}