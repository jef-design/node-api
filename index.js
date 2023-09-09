import express from 'express'
import mongoose from 'mongoose'

const app = express()

app.get('/', (req, res) => {
    res.send('ok')
})

app.listen(5000, (req, res) => {
console.log("connected to server")
 })

