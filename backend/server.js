const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')

//Load env vars

dotenv.config()

//Connect to database

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

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
