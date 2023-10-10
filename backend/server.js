require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const chalk = require('chalk')

const userRoutes = require('./routes/user')
const exitRoutes = require('./routes/exits')


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
app.use('/api/user',userRoutes)

// DATABASE
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log(chalk.green('Connected to MongoDB'));
    app.listen(port, () => {
        console.log(chalk.green(`http://localhost:${port}`));
    })
})
.catch((err) => {
    console.log(chalk.red(err));
})
