const express = require('express');
const ExitPoint = require('../models/exitModel');
const { 
    createExitPoint,
    getAllExits,
    getSingleExit,
    deleteSingleExit,
    updateSingleExit
} = require('../controllers/exitController');

const router = express.Router()

// GET /api/exits - get all exits
router.get('/', getAllExits);

// GET /api/exits/:id - get one exit
router.get('/:id', getSingleExit);

// POST /api/exits - create one exit
router.post('/', createExitPoint);

// DELETE /api/exits - delete one exit
router.delete('/:id', deleteSingleExit);

// PUT /api/exits - update one exit
router.put('/:id', updateSingleExit);

module.exports = router;