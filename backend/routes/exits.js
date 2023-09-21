const express = require('express');
const ExitPoint = require('../models/exitModel');
const { 
    createExitPoint,
    getAllExits,
    getSingleExit,
    // deleteSingleExit,
    // updateSingleExit
} = require('../controllers/exitController');

const router = express.Router()

// GET /api/exits - get all exits
router.get('/', getAllExits);

// GET /api/exits/:id - get one exit
router.get('/:id', getSingleExit);

// POST /api/exits - create one exit
router.post('/', createExitPoint);

// DELETE /api/exits - delete one exit
router.delete('/:id', (req,res) => {
    res.json({message: `DELETE /api/exits/:id - delete one exit :id is ${req.params.id}`})
});

// PUT /api/exits - update one exit
router.put('/:id', (req,res) => {
    res.json({message: `PUT /api/exits/:id - update one exit :id is ${req.params.id}`})
});

module.exports = router;