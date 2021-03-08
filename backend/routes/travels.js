const express = require('express')
const { getTravels } = require('../controllers/travels')

const router = express.Router()

router.route('/').get(getTravels)

module.exports = router
