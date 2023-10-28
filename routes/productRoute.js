const express = require('express')
const router = express.Router()
const {getAllProducts,getProductById,deleteProduct,editProduct,createProduct} = require('../controllers/productControler')



// Get all products

router.get('/', getAllProducts)

// Get product by ID

router.get('/:id', getProductById)

// edit product by ID

router.put('/:id', editProduct)

// delete product by ID

router.delete('/:id', deleteProduct)

// Create product by ID

router.post('/', createProduct)

module.exports = router