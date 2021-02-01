const router = require('express').Router()
const usersRoutes = require('./user/users.js')
const loginRoute = require('./user/login')

const passport = require('passport')

// Login route for Users
router.use('/login', loginRoute)

// '/api/users' for all routes involving User Accounts
router.use('/users', usersRoutes)

// '/api' for any testing root of API
router.get('/',(req, res) => {
    res.status(200).send("Successfully get to /api route")
})

module.exports = router