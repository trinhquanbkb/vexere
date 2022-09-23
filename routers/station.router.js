const express = require('express')
const stationRouter = express.Router()
const { createStation, getStation, getDetailStation, updateStation, deleteStation, getStationFilter } = require('../controllers/station.controller')
const { checkStation } = require('../middleware/Validate/validation')
const { authenticate } = require('../middleware/Auth/authenticate')
const { adminAuthorize, userAuthorize } = require('../middleware/Auth/authorization')

stationRouter.post("/", authenticate, adminAuthorize, createStation)
stationRouter.get("/", authenticate, userAuthorize, getStation)
stationRouter.get("/:id", authenticate, userAuthorize, getDetailStation)
stationRouter.put("/:id", authenticate, adminAuthorize, updateStation)
stationRouter.delete("/:id", authenticate, adminAuthorize, deleteStation)

module.exports = {
    stationRouter,
}