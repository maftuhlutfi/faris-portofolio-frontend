const router = require('express').Router()
const orderController = require('../../controllers/orderController')
const {admin, protect} = require('../../middleware/authMiddleware')

// Match with '/api/order'
router
    .route('/')
    .get(protect, orderController.getAllOrder)
    .post(protect, orderController.createNewOrder)

// Match with '/api/order/:id'
router
    .route('/:id')
    .get(protect, orderController.getOrderById)
    .put(protect, orderController.updateOrderDone)
    .delete(protect, orderController.deleteOneOrderById)

// Match with '/api/order/:id/detail'
router
    .route('/:id/detail')
    .get(protect, orderController.getAllOrderDetailsById)
    .post(protect, orderController.addDetailOrder)
    .delete(protect, orderController.deleteAllDetailOrderById)

// Match with '/api/order/:id/detail/:id_produk'
router
    .route('/:id/detail/:id_produk')
    .get(protect, orderController.getAllOrderDetailsByIdOrderAndIdProduct)
    .put(protect, orderController.updateDetailOrderQty)
    .delete(protect, orderController.deleteOneDetailOrder)

module.exports = router