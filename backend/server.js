const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDB = require('./config/db')

//Load env vars

dotenv.config()

//Connect to database

connectDB()

//Route files

const travels = require('./routes/travels')

const app = express()
//body parser
app.use(express.json())
//dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Mount routers
app.use('/api/v1/travels', travels)

const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
)

//Handle inhandled promises rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  //close server and exit process
  server.close(() => process.exit(1))
})
