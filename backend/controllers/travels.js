//? @desc        Get all travels
//? @route       GET /api/v1/travels
//? @accesss     Public
exports.getTravels = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all travels' })
}
