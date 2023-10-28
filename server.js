require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoutes')
const cors = require('cors')


app.use(express.json())
app.use(cors())


// Get all Products

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)


mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to DB')
    app.listen(PORT, (err)=>{
        console.log(`App is up and running on ${PORT}`)
    })
}).catch((err)=>{
    console.log(err)})


