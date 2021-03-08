const mongoose = require('mongoose')
const slugify = require('slugify')

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const TravelSchema = new mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: {
      type: String,
      required: [true, 'Favor de agregar un nombre'],
    },
    slug: String,
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, 'Favor de agregar una descripción'],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'Favor de agregar el precio del viaje'],
      default: 0,
    },
    countInStock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

// Create bootcamp slug  from the name
TravelSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})


module.exports = mongoose.model('Travel', TravelSchema)
