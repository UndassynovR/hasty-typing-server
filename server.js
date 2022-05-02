const config = require('config')
const path = require('path')
const express = require('express')

const app = express()
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', (req, res) => {
    res.sendFile(express.static(path.join(__dirname, '../client/build/index.html')))
})
app.listen(config.get('port'), () => {
    console.log(`Server works on port ${config.get('port')}`)
})
