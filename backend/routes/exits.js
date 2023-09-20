const express = require('express');

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
router.post('/', (req,res) => {
    console.log(req.body);
    res.json({message: 'POST /api/exits - create one exit'})
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