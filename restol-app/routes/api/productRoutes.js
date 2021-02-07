const router = require('express').Router()
const productController = require('../../controllers/productController')
const {admin, protect} = require('../../middleware/authMiddleware')

// Match with '/api/product'
router
    .route('/')
    .get(productController.getAllProduct)
    .post(protect, admin, productController.createNewProduct)

// Match with '/api/product/:id'
router
    .route('/:id')
    .get(productController.getProductById)
    .put(protect, admin, productController.updateProductById)
    .delete(protect, admin, productController.deleteOneProductById)

module.exports = router