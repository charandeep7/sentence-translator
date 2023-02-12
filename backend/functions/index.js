const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors')
const sentence = require('../routes/sentence')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/.netlify/functions/index/convert', sentence);

app.get('/.netlify/functions/index',(_,res) => {
    return res.status(200).json({
        "status": "running....",
        "name": "KITISH"
    })
})

module.exports.handler = serverless(app);