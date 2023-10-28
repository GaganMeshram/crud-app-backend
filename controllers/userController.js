const User = require('../model/usersModel');

// Get all User

const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

// Create User

const createUser = async (req,res)=>{
    try {
        const user = await User.create(req.body)
        res.status(200).json({message: `User has been added: ${user}`})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
        
    }
}

// Get User by ID

const getUserById = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
}

// Edit User

const editUser = async(req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message:`Can not find product with ID ${id}`})
        }
        const editUser = await User.findById(id)
        res.status(200).json({message:`Product: ${id} has been updated`})
    } catch (error) {
        res.status(500).json({message:error.message})

    }
}

// Delete User

const deleteUser = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        if(!user){
            return res.status(404).json({message:`Could not find product by ID ${id}`})
        }
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:error.message})

        
    }
}

module.exports = {getAllUsers, getUserById, editUser, deleteUser, createUser}