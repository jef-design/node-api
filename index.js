import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.get('/', (req, res) => {
    res.send('ok')
})

mongoose.connect('mongodb+srv://jef1234:jef1234@mern-blogdb.cwxjvqt.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    app.listen(5000, (req, res) => {
        console.log("connected to server")
    })
})

