const router = require('express').Router()
const usersRoutes = require('./user/users.js')
const loginRoute = require('./user/login')
const categoryRoute = require('./categoryRoutes')
const productRoute = require('./productRoutes')
const orderRoute = require('./orderRoutes')
const paymentRoute = require('./paymentRoutes')
const deliveryRoute = require('./deliveryRoutes')

const passport = require('passport')

// Login route for Users
router.use('/login', loginRoute)

// '/api/users' for all routes involving User Accounts
router.use('/users', usersRoutes)

// '/api/category' for all routes involving Category
router.use('/category', categoryRoute)

// '/api/product' for all routes involving Category
router.use('/product', productRoute)

// '/api/order' for all routes involving Order
router.use('/order', orderRoute)

// '/api/payment' for all routes involving Payment
router.use('/payment', paymentRoute)

// '/api/delivery' for all routes involving Payment
router.use('/delivery', deliveryRoute)

// '/api' for any testing root of API
router.get('/',(req, res) => {
    res.status(200).send("Successfully get to /api route")
})

module.exports = router