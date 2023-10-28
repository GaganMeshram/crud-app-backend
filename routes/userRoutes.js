const express = require('express')
const router = express.Router()
const {getAllUsers, getUserById, editUser, deleteUser, createUser} = require('../controllers/userController')



// Get all products

router.get('/', getAllUsers)

// Get product by ID

router.get('/:id', getUserById)

// edit product by ID

router.put('/:id', editUser)

// delete product by ID

router.delete('/:id', deleteUser)

// Create product by ID

router.post('/', createUser)

module.exports = router