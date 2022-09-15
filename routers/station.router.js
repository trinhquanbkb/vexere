const express = require('express')
const stationRouter = express.Router()
const { createStation, getAllStation, getDetailStation, updateStation, deleteStation } = require('../controllers/station.controller')

stationRouter.post("/", createStation)
stationRouter.get("/", getAllStation)
stationRouter.get("/:id", getDetailStation)
stationRouter.put("/:id", updateStation)
stationRouter.delete("/:id", deleteStation)

module.exports = {
    stationRouter,
}