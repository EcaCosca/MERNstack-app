require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const exitRoutes = require('./routes/exits')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 5000

// MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use((req,res, next) => {
    console.log('METHOD: '+req.method);
    console.log('PATH: '+req.path);
    console.log(req.body);
    next()
})

// ROUTES
app.use('/api/exits',exitRoutes)

// DATABASE
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    })
})
.catch((err) => {
    console.log(err);
})
