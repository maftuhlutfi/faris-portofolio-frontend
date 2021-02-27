const {Product} = require('../models')

module.exports = {
    // @desc    Get all product
    // @route   GET /api/product
    // @access  Public
    getAllProduct: (req, res) => {
        Product.selectAllProduct(data => {
            res.status(200).send(data)
        })
    },
    // @desc    Get product by id
    // @route   GET /api/product/:id
    // @access  Public
    getProductById: (req, res) => {
        Product.selectProductById(req.params.id, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Add new product (id, nama, harga, kategori, diskon, foto)
    // @route   POST /api/product
    // @access  Private/Admin
    createNewProduct: (req, res) => {
        const value = Object.values(req.body);
        Product.insertOne(value, data => {
            res.status(200).send(`Successfully add new product '"${value[0]}"`)
        })
    },
    // @desc    Update product by id (nama, icon)
    // @route   PUT /api/product/:id
    // @access  Private/Admin
    updateProductById: (req, res) => {
        const value = Object.values(req.body)
        Product.updateOne(value, req.params.id, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Product updated successfully.")
            }
        })
    },
    // @desc    Delete a product by id
    // @route   DELETE /api/product/:id
    // @access  Private/Admin
    deleteOneProductById: (req, res) => {
        Product.deleteOne(req.params.id, data => {
            res.status(200).send("Successfully deleted Product with id " + req.params.id)
        })
    }
}