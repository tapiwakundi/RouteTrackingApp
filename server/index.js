const express = require('express')
const connectDB = require('./src/config/db')
const authRoutes = require('./src/routes/authRoutes')
const bodyParser = require('body-parser')
const requireAuth = require('./src/middlewares/requireAuth')
require('./src/models/User')

const app = express()
app.use(bodyParser.json())

app.use(authRoutes)
connectDB()


app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
})

app.listen(3000, ()=> {console.log('listening on port 3000');})