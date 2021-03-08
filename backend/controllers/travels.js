const Travel = require('../models/Travel')
//? @desc        Get all travels
//? @route       GET /api/v1/travels
//? @accesss     Public
exports.getTravels = async (req, res, next) => {
  try {
    const travels = await Travel.find()
    res.status(200).json({ success: true, data: travels })
  } catch (error) {
    res.status(400).json({ success: false })
  }
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
    res.status(400).json({ success: false, error })
  }
}
