const router = require('express').Router()
const categoryController = require('../../controllers/categoryController')
const {admin, protect} = require('../../middleware/authMiddleware')

// Match with '/api/category'
router
    .route('/')
    .get(categoryController.getAllCategory)
    .post(protect, admin, categoryController.createNewCategory)

// Match with '/api/category/:id'
router
    .route('/:id')
    .get(categoryController.getCategoryById)
    .put(protect, admin, categoryController.updateCategoryById)
    .delete(protect, admin, categoryController.deleteOneCategoryById)

module.exports = router