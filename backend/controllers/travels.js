const Travel = require('../models/Travel')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
//? @desc        Get all travels
//? @route       GET /api/v1/travels
//? @accesss     Public
exports.getTravels = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults)
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
//? @desc    Fetch single travel
//? @route   GET /api/v1/travels/:id
//? @access  Public
exports.getTravel = asyncHandler(async (req, res, next) => {
  const travel = await Travel.findById(req.params.id)
  if (!travel) {
    return next(
      new ErrorResponse(`Viaje no encontrado con el id ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: travel,
  })
})
