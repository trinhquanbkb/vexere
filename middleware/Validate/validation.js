const { Stations } = require('../../models')

const checkStation = async(req, res, next) => {
    const station = await Stations.findOne({
        where: {
            id: req.params.id
        }
    })
    console.log(station)
    if(station){
        next()
    } else {
        res.status(404).send(`Cannot found station by id = ${req.params.id}`)
    }
}

module.exports = {
    checkStation,
}