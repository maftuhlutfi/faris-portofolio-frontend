const router = require('express').Router()
const userController = require('../../../controllers/userController')
const {admin, protect} = require('../../../middleware/authMiddleware')

// Match with '/api/users'
router
    .route('/')
    .get(protect, admin, userController.getAllUsers)
    .post(userController.createNewUser)

// Match with '/api/user/:id'
router
    .route('/:id')
    .get(protect, userController.getUserById)
    .delete(protect, userController.deleteOneUserById)
    .put(protect, userController.updateUserById)

module.exports = router