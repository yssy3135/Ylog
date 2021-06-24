const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = mongoose.Schema({
    user : {
        type: Schema.Types.ObjectId,
        ref:'blogUser'
    },
    userId : {
        type:String,
        maxlength:30
    },
   category: {
       type : String,
       maxlength:20
   },
   

})

const Category = mongoose.model('blogCategory', categorySchema);
module.exports = { Category }