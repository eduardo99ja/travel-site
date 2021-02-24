const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

const PORT = 5000
app.listen(PORT, console.log(`Server running in 5000 mode on port 5000`))
