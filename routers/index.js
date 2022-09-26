const express = require('express')
const rootRouter = express.Router()
const { stationRouter } = require('./station.router')
const { userRouter } = require('./user.router')
const { tripRouter } = require('./trip.router')
const { fingerprintRouter } = require('./fingerprint')
const { ticketRouter } = require('./ticket.router')

rootRouter.use("/stations", stationRouter)
rootRouter.use("/users", userRouter)
rootRouter.use("/trips", tripRouter)
rootRouter.use("/fingerPrint", fingerprintRouter)
rootRouter.use("/tickets", ticketRouter)

module.exports = rootRouter
