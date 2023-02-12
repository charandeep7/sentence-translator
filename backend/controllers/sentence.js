const nlp = require('compromise')
nlp.extend(require('compromise-sentences'))

function handleConvertIntoPastSentence(req,res){
    let doc = nlp(req.body.sentence)
    doc.sentences().toPastTense()
    const txt = doc.text()
    return res.status(201).json({
        "status": txt
    })
}

function handleConvertIntoPresentSentence(req,res){
    let doc = nlp(req.body.sentence)
    doc.sentences().toPresentTense()
    const txt = doc.text()
    return res.status(201).json({
        "status": txt
    })
}

function handleConvertIntoFutureSentence(req,res){
    let doc = nlp(req.body.sentence)
    doc.sentences().toFutureTense()
    const txt = doc.text()
    return res.status(201).json({
        "status": txt
    })
}
module.exports = { handleConvertIntoPastSentence , handleConvertIntoPresentSentence , handleConvertIntoFutureSentence }