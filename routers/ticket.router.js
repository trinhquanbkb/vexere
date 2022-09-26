const express = require('express')
const ticketRouter = express.Router()
const { authenticate } = require('../middleware/Auth/authenticate')
const { adminAuthorize, userAuthorize } = require('../middleware/Auth/authorization')
const { buyTicket } = require('../controllers/ticket.controller')

ticketRouter.put('/:id', authenticate, userAuthorize, buyTicket)

module.exports = {
    ticketRouter
}