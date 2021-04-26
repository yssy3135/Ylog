const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Contents } = require("../models/Contents")




var storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,`${Date.now()}_${file.originalname}`)
    }
})

var upload = multer({storage: storage}).single("file")

router.post('/image',(req,res) => {
    upload(req,res,err => {
        if(err){
            return res.json({success:false,err})
        }else{
            return res.json({success:true, filePath:res.req.file.path ,fileName: res.req.file.filename})
        }
    })


})


router.post("/write",(req,res) => {
   
    const content = new Contents(req.body);

    content.save((err,doc) => {
        if(err) {
            
            console.log(err)
            return res.status(200).json({success:false,err})
        }
        return res.status(200).json({success: true})
    })

});

router.get("/content",(req,res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 20;
    let skip = req.body.skip ? parseInt(req.body.skip) :0;
   

    Contents.find()
    .populate("writer")
    .skip(skip)
    .limit(limit)
    .exec((err,contentsInfo) => {
        if(err) {
          
            return res.status(400).json({success: false, err})
        }
       

        return res.status(200).json({
            success : true,
            contentsInfo,
            postSize : contentsInfo.length
        })
    })



})


module.exports = router;