//? @desc        Get all travels
//? @route       GET /api/v1/travels

const Travel = require('../models/Travel')

//? @accesss     Public
exports.getTravels = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all travels' })
}
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
    res.status(400).json({ success: false,error })
  }
}
