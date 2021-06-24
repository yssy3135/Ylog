 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


 const contentsSchema = mongoose.Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref:'blogUser'
    },
    userId : {
        type:String,
        maxlength:30
    },
    title: {
        type : String,
        maxlength:50
    },
    contents: {
        type : String,
    },
    textcontents: {
        type : String,
    },
    images:{
        type :Array,
        default:[]
    },
    views:{
        type:Number,
        default:0
    },
    category:{
        type : Schema.Types.ObjectId,
        ref:'blogCategory'
    },
    createdAt:{
        type : Date,
    },
    updatedAt:{
        type : Date,
    }
 })




const Contents = mongoose.model('blogContents', contentsSchema);
module.exports = { Contents }