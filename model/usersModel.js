const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"]
    },
    age:{
        type:Number,
        required:true,
        default:0
    },
    company:{
        type:String,
        require:true
       
    }
    
})

const user = mongoose.model('user',userSchema)
module.exports = user