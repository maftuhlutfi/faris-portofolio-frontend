const router = require('express').Router()
const User = require('../../../controllers/userController')
const {protect} = require('../../../middleware/authMiddleware')

// '/api/login' route
router
    .route('/')
    .post(User.authUser)

router
    .route('/status')
    .get(protect, User.getUserStatus)

module.exports = router