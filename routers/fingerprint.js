const express = require('express')
const fingerprintRouter = express.Router()
const Fingerprint = require('express-fingerprint')

fingerprintRouter.get('/', (req, res) => {
    res.send(req.fingerprint)
})

module.exports = {
    fingerprintRouter
}