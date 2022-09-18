const express = require('express')
const stationRouter = express.Router()
const { createStation, getStation, getDetailStation, updateStation, deleteStation, getStationFilter } = require('../controllers/station.controller')
const { checkStation } = require('../middleware/validation')

stationRouter.post("/", createStation)
stationRouter.get("/", getStation)
stationRouter.get("/:id", getDetailStation)
stationRouter.put("/:id", checkStation, updateStation)
stationRouter.delete("/:id", checkStation, deleteStation)

module.exports = {
    stationRouter,
}