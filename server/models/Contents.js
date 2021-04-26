 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


 const contentsSchema = mongoose.Schema({
    writer : {
        type : Schema.Types.ObjectId,
        ref:'blogUser'
    },
    title: {
        type : String,
        maxlength:50
    },
    contents: {
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


 },{timestamps: true})

const Contents = mongoose.model('blogContents', contentsSchema);
module.exports = { Contents }