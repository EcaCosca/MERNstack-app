const express = require('express');
const ExitPoint = require('../models/exitModel');

const router = express.Router()

// GET /api/exits - get all exits
router.get('/', (req,res) => {
    res.json({message: 'GET /api/exits - get all exits'})
});

// GET /api/exits/:id - get one exit
router.get('/:id', (req,res) => {
    res.json({message: `GET /api/exits/:id - get one exit :id is ${req.params.id}`})
});

// POST /api/exits - create one exit
router.post('/', async (req,res) => {
    console.log(req.body);
    const {name, location, altitude, description, coordinates} = req.body;
    
    try {
        const exit = await ExitPoint.create({
            name, 
            location,
            altitude,
            description,
            coordinates 
        })
        res.status(200).json(exit)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
});

// DELETE /api/exits - delete one exit
router.delete('/:id', (req,res) => {
    res.json({message: `DELETE /api/exits/:id - delete one exit :id is ${req.params.id}`})
});

// PUT /api/exits - update one exit
router.put('/:id', (req,res) => {
    res.json({message: `PUT /api/exits/:id - update one exit :id is ${req.params.id}`})
});

module.exports = router;