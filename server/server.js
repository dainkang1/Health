var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var path = require('path')
var db = require('./db.js')
var dotenv = require('dotenv')
dotenv.config()

var health = require('./routes/health')
var fitness = require('./routes/fitness')
var challenge = require('./routes/challenge')
var users = require('./routes/users')
var signin = require('./routes/signin')
var signup = require('./routes/signup')


app.use(cors())
app.use(express.static('./client'))
app.use(bodyParser.urlencoded({extended: true, limit: '25mb'}))
app.use(bodyParser.json({limit: '25mb', extended: true}))
app.use('/scripts', express.static(path.join(__dirname + '/../node_modules'))

app.use('/api/users/', users)
app.use('/api/signin/', signin)
app.use('/api/health/', health)
app.use('/api/fitness/', fitness)
app.use('/api/challenge/', challenge)
app.use('/api/signup/', signup)


var port = process.env.PORT || 8080

app.listen(port, console.log('Port is working', port))
