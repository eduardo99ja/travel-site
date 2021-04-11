const express = require('express')
const {
  getTravels,
  createTravel,
  getTravel,
} = require('../controllers/travels')
const advancedResults = require('../middleware/advancedResults')
const Travel = require('../models/Travel')

const router = express.Router()

router.route('/').get(advancedResults(Travel), getTravels).post(createTravel)
router.route('/:id').get(getTravel)

module.exports = router
