const router = require('express').Router()
const deliveryController = require('../../controllers/deliveryController')
const {admin, protect} = require('../../middleware/authMiddleware')

// Match with '/api/delivery'
router
    .route('/')
    .get(protect, deliveryController.getAllDelivery)
    .post(protect, deliveryController.createNewDelivery)

// Match with '/api/delivery/:id'
router
    .route('/:id')
    .get(protect, deliveryController.getDeliveryById)
    .put(protect, deliveryController.updateDeliveryDone)
    .delete(protect, deliveryController.deleteOneDeliveryById)

module.exports = router