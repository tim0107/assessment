const express = require('express');
const router = express.Router();
const userController = require('./userController');
const authRoutes = require('./authRoutes');  
const authMiddleware = require('./authMiddleware'); 

// Use auth routes
router.use('/', authRoutes);


router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Protected user routes
// router.get('/me', authMiddleware.protect, authController.getUserDetails);
// router.put('/me', authMiddleware.protect, authController.updateUser);

module.exports = router;

