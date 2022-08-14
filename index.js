const express = require('express')
const app = express()

const Notes = require('./Notes') 
app.use("/Notes", Notes)
app.use(express.json({type: "application/json"}))
app.use(express.urlencoded({ extended: true }))

const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.SECRET)

const db = mongoose.connection

db.on('error', (err)=>{
    console.log(err)
})

db.once('open', ()=>{
    console.log("Connected to Database!")
})

app.listen(5000, ()=>{
    console.log("Server Started at localhost:5000")
})