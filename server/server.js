const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const apiRoutes = require('./routes/api')

const server = express()

// middleware
server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.json())

// routes
server.use('/api/v1/', apiRoutes)

// wildcard route
server.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = server
