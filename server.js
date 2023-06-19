const express = require('express')
const color = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 4000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/v1/menu', require('./routes/menuRoute'))

app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
    }
)