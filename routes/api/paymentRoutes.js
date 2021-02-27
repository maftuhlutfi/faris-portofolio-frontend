const router = require('express').Router()
const paymentController = require('../../controllers/paymentController')
const {admin, protect} = require('../../middleware/authMiddleware')

// Match with '/api/payment'
router
    .route('/')
    .get(protect, paymentController.getAllPayment)
    .post(protect, paymentController.createNewPayment)

// Match with '/api/payment/:id'
router
    .route('/:id')
    .get(protect, paymentController.getPaymentById)
    .put(protect, paymentController.updatePaymentDone)
    .delete(protect, paymentController.deleteOnePaymentById)

module.exports = router