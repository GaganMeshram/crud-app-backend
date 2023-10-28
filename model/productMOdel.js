const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"]
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    Price:{
        type:Number,
        require:true
       
    }
    
})

const product = mongoose.model('product',productSchema)
module.exports = product