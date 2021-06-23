 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;


 const contentsSchema = mongoose.Schema({
    id:{
        type: String,
        ref:'blogUser'
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
    createdAt: { 
        type: Date, default: getCurrentDate()
    },
    updatedAt: { 
        type: Date, default: getCurrentDate()
    }


 })

 function getCurrentDate(){
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var today = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    return new Date(Date.UTC(year, month, today, hours, minutes, seconds, milliseconds));
}


const Contents = mongoose.model('blogContents', contentsSchema);
module.exports = { Contents }