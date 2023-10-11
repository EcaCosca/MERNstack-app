const express = require('express');
const ExitPoint = require('../models/exitModel');
const { 
    createExitPoint,
    getAllExits,
    getSingleExit,
    deleteSingleExit,
    updateSingleExit
} = require('../controllers/exitController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router()

// REQUIRE AUTHENTICATION FOR ALL ROUTES
router.use(requireAuth);

router.route('/')
    .get(getAllExits)
    .post(createExitPoint);

router.route('/:id')
    .get(getSingleExit)
    .delete(deleteSingleExit)
    .put(updateSingleExit);

module.exports = router;