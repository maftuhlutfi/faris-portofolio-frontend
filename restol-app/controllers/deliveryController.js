const {Delivery} = require('../models')

module.exports = {
    // @desc    Add new delivery (id_pembayaran, id_user, alamat, id_pegawai)
    // @route   POST /api/delivery
    // @access  Private
    createNewDelivery: (req, res) => {
        const value = Object.values(req.body);
        Delivery.insertOne(value, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Get all delivery
    // @route   GET /api/delivery
    // @access  Private/!Customer
    getAllDelivery: (req, res) => {
        if (req.user.tipe != 5) {
            Delivery.selectAllDelivery(data => {
                res.status(200).send(data)
            })
        } else {
            res.status(401).send("Not Authorized.")
        }
    },
    // @desc    Get delivery by id
    // @route   GET /api/delivery/:id
    // @access  Private
    getDeliveryById: (req, res) => {
        Delivery.selectDeliveryById(req.params.id, data => {
            res.status(200).send(data)
        })
    },
    // @desc    Update delivery done by id 
    // @route   PUT /api/delivery/:id
    // @access  Private
    updateDeliveryDone: (req, res) => {
        Delivery.updateOne(req.params.id, result => {
            if (result.changedRows === 0) {
                res.status(204).send("No data found to be updated.")
            } else {
                res.status(200).send("Delivery updated successfully.")
            }
        })
    },
    // @desc    Delete a Delivery by id
    // @route   DELETE /api/delivery/:id
    // @access  Private
    deleteOneDeliveryById: (req, res) => {
        Delivery.deleteOne(req.params.id, data => {
            res.status(200).send("Successfully deleted Delivery with id " + req.params.id)
        })
    }
}