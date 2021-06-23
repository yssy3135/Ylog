const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = mongoose.Schema({
   id : {
       type : String,
       ref:'blogUser'
   },
   category: {
       type : String,
       maxlength:20
   },
   

})

const Category = mongoose.model('blogCategory', categorySchema);
module.exports = { Category }