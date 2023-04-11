const express = require('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
const router = express.Router()

const con = require('./config/db.js')

app.set('view engine', 'ejs')

app.use(function (req, res, next) {
    req.con = con
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

const nurulikhsanRouter = require("./routes/nurulikhsanRouter");
app.use("/", nurulikhsanRouter)

app.listen(3000);
console.log('server is running on http://localhost:3000')
