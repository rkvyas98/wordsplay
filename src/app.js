const path = require('path')
const express = require('express')
const hbs = require('hbs')
const wordsPlay = require('./wordsPlay')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
var port = process.env.PORT || 3000

app.set('view engine', 'hbs')
console.log(publicDirectoryPath);
app.use(express.static(publicDirectoryPath))

app.get('', (req, res)=>{
    res.render('index',{
        title: 'WordsPlay App',
        name: 'Rakshit Vyas'
    })
})

app.get('/wordsplay', (req, res)=>{
    if(!req.query.input){
        return res.send({error : 'No input'})
    }
    res.send({
        sentenceSegmentation: wordsPlay.sentenceSegmentation(req.query.input),
        wordSegmentation: wordsPlay.wordSegmentation(req.query.input),
        remove_stopwords: wordsPlay.remove_stopwords(req.query.input),
        no_repeated_strings: wordsPlay.no_repeated_strings(req.query.input),
        each_word_reversed: wordsPlay.each_word_reversed(req.query.input),
        only_numbers: wordsPlay.only_numbers(req.query.input)
    })
})

app.listen(port,()=>{
    console.log('Server is up on port 3000.');
})