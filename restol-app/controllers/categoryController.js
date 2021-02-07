const {Category} = require('../models')

module.exports = {
    // @desc    Add new category (nama, icon)
    // @route   POST /api/category
    // @access  Private/Admin
    createNewCategory: (req, res) => {
        const value = Object.values(req.body);
        Category.insertOne(value, data => {
            res.status(200).send(`Successfully add new category '${req.body.nama}'`)
        })
    },
    // @desc    Get all category
    // @route   GET /api/category
    // @access  Public
    getAllCategory: (req, res) => {
        Category.selectAllCategory(data => {
            res.status(200).send(data)
        })
    },
    // @desc    Get category by id
    // @route   GET /api/category/:id
    // @access  Public
    getCategoryById: (req, res) => {
        Category.selectCategoryById(req.params.id, data => {
            res.status(200).send(data[0])
        })
    },
    // @desc    Update category by id (nama, icon)
    // @route   PUT /api/category/:id
    // @access  Private/Admin
    updateCategoryById: (req, res) => {
        const value = Object.values(req.body)
        Category.updateOne(value, req.params.id, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Category updated successfully.")
            }
        })
    },
    // @desc    Delete a category by id
    // @route   DELETE /api/category/:id
    // @access  Private/Admin
    deleteOneCategoryById: (req, res) => {
        Category.deleteOne(req.params.id, data => {
            res.status(200).send("Successfully deleted Category with id " + req.params.id)
        })
    }
}