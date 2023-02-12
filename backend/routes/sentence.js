const express = require('express')
const { handleConvertIntoPastSentence , handleConvertIntoPresentSentence , handleConvertIntoFutureSentence } = require('../controllers/sentence')


const router = express.Router()

router.post('/past',handleConvertIntoPastSentence)

router.post('/present',handleConvertIntoPresentSentence)

router.post('/future',handleConvertIntoFutureSentence)

router.get('/test',(_,res) => {
    return res.status(200).json({
        "status": "running....."
    })
})

router.all('*',(_,res) => res.status(404).json({
    "status": "Error",
    "message": "404 | Page Not Found KITISH"
}))

module.exports = router