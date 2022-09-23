const express = require('express')
const tripRouter = express.Router()
const { createTrip, getTripFilter, deleteTrip, updateTrip, getTripDetail } = require('../controllers/trip.controller')
const { authenticate } = require('../middleware/Auth/authenticate')
const { userAuthorize, adminAuthorize } = require('../middleware/Auth/authorization')
const { checkTrip } = require('../middleware/Validate/validation')

tripRouter.post('/', authenticate, adminAuthorize, createTrip)
tripRouter.get('/', authenticate, userAuthorize, getTripFilter)
tripRouter.delete('/:id', authenticate, adminAuthorize, checkTrip, deleteTrip)
tripRouter.put('/:id', authenticate, adminAuthorize, checkTrip, updateTrip)
tripRouter.get('/:id', authenticate, userAuthorize, checkTrip, getTripDetail)

module.exports = {
    tripRouter,
}