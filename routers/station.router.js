const express = require('express')
const stationRouter = express.Router()
const { createStation, getStation, getDetailStation, updateStation, deleteStation, getStationFilter } = require('../controllers/station.controller')

stationRouter.post("/", createStation)
stationRouter.get("/", getStation)
stationRouter.get("/:id", getDetailStation)
stationRouter.put("/:id", updateStation)
stationRouter.delete("/:id", deleteStation)

module.exports = {
    stationRouter,
}