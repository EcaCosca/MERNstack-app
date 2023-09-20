require('dotenv').config()
const express = require('express')

const exitRoutes = require('./routes/exits')


const app = express()
const port = process.env.PORT || 5000

// MIDDLEWARE
app.use(express.json())
app.use((req,res, next) => {
    console.log('METHOD: '+req.method);
    console.log('PATH: '+req.path);
    next()
})

// ROUTES
app.use('/api/exits',exitRoutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})