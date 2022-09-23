const { Stations, Trips } = require('../../models')

const checkStation = async(req, res, next) => {
    const station = await Stations.findOne({
        where: {
            id: req.params.id
        }
    })
    if(station){
        next()
    } else {
        res.status(404).send(`Cannot found station by id = ${req.params.id}`)
    }
}

const checkTrip = async(req, res, next) => {
    const trip = await Trips.findOne({
        where: {
            id: req.params.id
        }
    })
    if(trip){
        next()
    } else {
        res.status(404).send(`Cannot found trip by id = ${req.params.id}`)
    }
}

module.exports = {
    checkStation,
    checkTrip,
}