const express = require('express')
const { getTravels, createTravel } = require('../controllers/travels')
const advancedResults = require('../middleware/advencedResults')
const Travel = require('../models/Travel')

const router = express.Router()

router.route('/').get(advancedResults(Travel), getTravels).post(createTravel)

module.exports = router
