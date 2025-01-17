require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const PORT = process.env.PORT;

const MONGODB_URI = process.env.MONGODB_URI;

const lotRoute = require('./router/lot.route')
const userRoute = require('./router/user.router')
const fabricRoute = require('./router/fabric.route')
const partyRoute = require('./router/party.route')
const dyeingRoute = require('./router/dyeing.route')
const dcolorRouter = require('./router/d.color.route')
const demandRouter = require('./router/demand.route')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("DB Connected")
    })
    .catch((error) => {
        console.log(error)
    })


app.use('/api/user', userRoute)
app.use('/api/lot', lotRoute)
app.use('/api/fabric', fabricRoute)
app.use('/api/party', partyRoute)
app.use('/api/dyeing', dyeingRoute)
app.use('/api/dcolor', dcolorRouter)
app.use('/api/demand', demandRouter)






app.use((req, res, next) => {
    res.status(404).json({ massage: " NOT FOUND" })
})

app.listen(PORT, () => { console.log(`Server is running a ${PORT}`) })