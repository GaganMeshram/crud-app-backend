const Product = require('../model/productMOdel');
const { catchAsync }=require('async-handler-express');


// Get all product

const getAllProducts = catchAsync(async(req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500)
        throw new Error(error.message) 
        
    }
})

// Create Product

const createProduct = catchAsync(async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json({message: `Product has been added: ${product}`})

    } catch (error) {
        res.status(500)
        throw new Error(error.message) 
        
    }
})

// Get product by ID

const getProductById = catchAsync(async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message) 
        
    }
})

// Edit product

const editProduct = catchAsync(async(req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if(!product){
            return res.status(404).json({message:`Can not find product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({message:`Product: ${id} has been updated`})
    } catch (error) {
        res.status(500)
        throw new Error(error.message) 

    }
})

// Delete product

const deleteProduct = catchAsync(async (req,res)=>{
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:`Could not find product by ID ${id}`})
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message) 

        
    }
})

module.exports = {getAllProducts, getProductById, editProduct, deleteProduct, createProduct}