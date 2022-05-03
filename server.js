const config = require('config')
const path = require('path')
const express = require('express')

const app = express()
app.use(express.static(path.join(__dirname, '../client/build')))

let words = [
    {id: 1, word: 'hello'},
    {id: 2, word: 'hello2'},
    {id: 3, word: 'hello3'}
]
app.get('/api/words', (req, res) => {
    console.log('api/words fetched');
    res.json(words)
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})
app.listen(config.get('port'), () => {
    console.log(`Server works on port ${config.get('port')}`)
})