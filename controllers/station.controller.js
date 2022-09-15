const { stat } = require('fs')
const { Stations } = require('../models')

const createStation = async (req, res) => {
    const { name, address, province } = req.body
    try {
        const newStation = await Stations.create({ name, address, province })
        res.status(201).send(newStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllStation = async(req, res) => {
    try {
        const stations = await Stations.findAll()
        res.status(200).send(stations)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailStation = async(req, res) => {
    try {
        const station = await Stations.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(station)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateStation = async(req, res) => {
    const { name, address, province } = req.body
    try {
        const station = await Stations.update({ name, address, province }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(station)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteStation = async(req,res) => {
    try {
        const station = await Stations.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send(station)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation,
}