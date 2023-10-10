const express = require('express');
const User = require('../models/userModel');
const { 
    loginUser,
    signupUser
} = require('../controllers/userController');

const router = express.Router()

// router.route('/')
//     .get(getAllExits)
//     .post(createExitPoint);

// router.route('/:id')
//     .get(getSingleExit)
//     .delete(deleteSingleExit)
//     .put(updateSingleExit);
router.post('/login', loginUser)
router.post('/signup', signupUser)

module.exports = router;