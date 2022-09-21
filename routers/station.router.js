const express = require('express')
const stationRouter = express.Router()
const { createStation, getStation, getDetailStation, updateStation, deleteStation, getStationFilter } = require('../controllers/station.controller')
const { checkStation } = require('../middleware/Validate/validation')
const { authenticate } = require('../middleware/Auth/authenticate')

stationRouter.post("/", authenticate, createStation)
stationRouter.get("/", authenticate, getStation)
stationRouter.get("/:id", authenticate, getDetailStation)
stationRouter.put("/:id", authenticate, updateStation)
stationRouter.delete("/:id", authenticate, deleteStation)

module.exports = {
    stationRouter,
}