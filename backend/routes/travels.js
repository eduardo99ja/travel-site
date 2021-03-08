const express = require('express')
const { getTravels, createTravel } = require('../controllers/travels')

const router = express.Router()

router.route('/').get(getTravels).post(createTravel)

module.exports = router
