const Travel = require('../models/Travel')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
//? @desc        Get all travels
//? @route       GET /api/v1/travels
//? @accesss     Public
exports.getTravels = asyncHandler(async (req, res, next) => {
  const travels = await Travel.find()
  res.status(200).json({ success: true, count: travels.length, data: travels })
})

//? @desc        Create new travel
//? @route       POST /api/v1/travels
//? @accesss     Private
exports.createTravel = async (req, res, next) => {
  try {
    const travel = await Travel.create(req.body)
    res.status(201).json({
      success: true,
      data: travel,
    })
  } catch (error) {
    next(error)
  }
}
