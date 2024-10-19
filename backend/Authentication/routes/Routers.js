const express = require('express');
const { createUser, getAllUsers, loginUser } = require('../controllers/userControls');
const router = express.Router();

router.get('/getUsers', getAllUsers)

router.post('/signup', createUser)

router.post('/login', loginUser)


module.exports= router;