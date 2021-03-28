const express = require('express')
const app = express()
const port = process.env.PORT || 5555

var cors = require('cors')

app.use(cors())

const connectDB = require('./config/db')

connectDB()

app.use(express.json())

const productions = require('./routes/productions')

app.use('/productions', productions)
app.use('/', (req, res) => res.json({message: 'Heelo'}))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})