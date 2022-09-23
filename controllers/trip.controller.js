const { Trips, sequelize } = require('../models')
const { Stations } = require('../models')
const { Op } = require("sequelize")
const { QueryTypes } = require('sequelize');

const createTrip = async (req, res) => {
    try {
        const { fromStation, toStation, startTime, price } = req.body
        const newTrip = await Trips.create({ fromStation, toStation, startTime, price })
        if (newTrip) {
            res.status(201).send(newTrip)
        }
        else {
            throw new Error('Cannot create trip')
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTripFilter = async (req, res) => {
    try {
        const fromStation = req.query.fromStation ? req.query.fromStation : ""
        const toStation = req.query.toStation ? req.query.toStation : ""
        const startTime = req.query.startTime ? req.query.startTime : 0
        const price = req.query.price ? req.query.price : 0
        if (fromStation || toStation || startTime || price) {
            const tripFilter = await Trips.findAll({
                attributes: ['id', 'startTime', 'price', 'updatedAt', 'createdAt'],
                where: {
                    fromStation: {
                        [Op.substring]: `%${fromStation}%`
                    },
                    toStation: {
                        [Op.substring]: `%${toStation}%`
                    },
                    startTime: {
                        [Op.gte]: startTime
                    },
                    price: {
                        [Op.gte]: price
                    }
                },
                include: [
                    {
                        model: Stations,
                        as: 'fromstation'
                    },
                    {
                        model: Stations,
                        as: 'tostation'
                    },
                ]
            })
            res.status(200).send(tripFilter)
        }
        else {
            const allTrip = await Trips.findAll()
            res.status(200).send(allTrip)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getTripDetail = async (req, res) => {
    try {
        const { id } = req.params
        const trip = await Trips.findOne({
            attributes: ['id', 'startTime', 'price', 'updatedAt', 'createdAt'],
            where: {
                id,
            },
            include: [
                {
                    model: Stations,
                    as: 'fromstation'
                },
                {
                    model: Stations,
                    as: 'tostation'
                },
            ]
        })
        if(trip){
            res.status(200).send(trip)
        }else{
            throw new Error(`Cannot get trip id = ${id}`)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params
        const tripdelete = await Trips.destroy({
            where: {
                id,
            }
        })
        if (tripdelete) {
            res.status(200).send("delete trip success")
        } else {
            throw new Error("Cannot delete trip")
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateTrip = async (req, res) => {
    try {
        const { id } = req.params
        const { startTime, price, toStation, fromStation } = req.body
        const tripUpdate = await Trips.update({ startTime, price, toStation, fromStation }, {
            where: {
                id,
            }
        })
        if (tripUpdate) {
            res.status(200).send(`update trip success with id = ${id}`)
        } else {
            throw new Error(`Cannot update trip id = ${id}`)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    createTrip,
    getTripFilter,
    deleteTrip,
    updateTrip,
    getTripDetail,
}