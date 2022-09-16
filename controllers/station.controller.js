const { stat } = require('fs')
const { Stations } = require('../models')
const { Op } = require("sequelize");

const createStation = async (req, res) => {
    const { name, address, province } = req.body
    try {
        const newStation = await Stations.create({ name, address, province })
        res.status(201).send(newStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getStation = async (req, res) => {
    const name = req.query.name ? req.query.name : ""
    const address = req.query.address ? req.query.address : ""
    const province = req.query.province ? req.query.province : ""
    try {
        if (name || address || province) {
            const stationFilter = await Stations.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    },
                    address: {
                        [Op.like]: `%${address}%`
                    },
                    province: {
                        [Op.like]: `%${province}%`
                    },
                }
            })
            res.status(200).send(stationFilter)
        }
        else {
            const allStation = await Stations.findAll()
            res.status(200).send(allStation)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailStation = async (req, res) => {
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

const updateStation = async (req, res) => {
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

const deleteStation = async (req, res) => {
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
    getStation,
    getDetailStation,
    updateStation,
    deleteStation,
}