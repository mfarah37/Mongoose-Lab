const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')

router.post('/flights/:flightId/destinations', destinationsCtrl.create)

module.exports = router