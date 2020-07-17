var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

require('./db/MongoDBConn')

var users = require('./routes/users')
var estudantes = require('./routes/EstudanteRoutes')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api/v1/users', users)
app.use('/estudantes', estudantes)

module.exports = app
