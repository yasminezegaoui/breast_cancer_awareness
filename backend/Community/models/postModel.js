const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    file:{
        type:Boolean,
        default:false
    },
    likes:{
        type:Number,
        default:0
    },
    postBy:{
        type:String,
        required:true
    }
})


module.exports = mongoose.model("posts",postSchema);