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

router.route('/')
    .get(getAllExits)
    .post(createExitPoint);

router.route('/:id')
    .get(getSingleExit)
    .delete(deleteSingleExit)
    .put(updateSingleExit);

module.exports = router;