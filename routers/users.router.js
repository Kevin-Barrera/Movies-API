const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');
const authMiddleware = require('../utils/auth.middleware');
                    //bloqueo para creacion de usuarios
router.post('/', /*authMiddleware.authenticateToken, */userController.registerUser); 

router.get('/', userController.getUsers);

router.post('/login', userController.loginUser);

module.exports = router;