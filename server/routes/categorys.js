const { response } = require('express');
const express = require('express');
const router = express.Router();
const { Category } = require("../models/Category")



router.post("/",(req,res) => {
   
    const category = new Category(req.body);

    category.save((err,doc) => {
        if(err) {
            return res.status(200).json({success:false,err})
        }

        Category.find()
        .where('userId')
        .equals(req.body.userId)
        .exec((err,categoryNames) => {
         
    
            if(err) return res.status(400).json({success: false, err})
    
            return res.status(200).json({
                success:true,
                categoryNames
            })
        })

    })

});


router.post("/category",(req,res) => {
   
    
    Category.find()
    .where('userId')
    .equals(req.body.userId)
    .exec((err,categoryNames) => {
        if(err) return res.status(400).json({success: false, err})

        return res.status(200).json({
            success:true,
            categoryNames
        })
    })
});



module.exports = router;