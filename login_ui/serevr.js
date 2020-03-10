var express = require("express")
var cors = require("core")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))

var Users = require('./routes/Users')

app.user('/users', Users)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})