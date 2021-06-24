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

router.post("/content",(req,res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 20;
    let skip = req.body.skip ? parseInt(req.body.skip) :0;

    if(req.body.category){
  
        let form = {
            $and : [req.body]
        }
        Contents.find(form)
        .populate("user")
        .populate("category")
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

    }else{
        Contents.find({userId : req.body.userId})
        .populate('user')
        .populate("category")
        .skip(skip)
        .limit(limit)
        .exec((err,contentsInfo) => {
            if(err) {   
                console.log(err)
                return res.status(400).json({success: false, err})
            }else{
                return res.status(200).json({
                    success : true,
                    contentsInfo,
                    postSize : contentsInfo.length
                })
            }
        })

    }

})


router.post("/detail",(req,res) => {
        console.log(req.body.contentId)
    
        Contents.find()
        .where('_id').equals(req.body.contentId)
        .populate("writer")
        .populate("category")
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


router.post("/edit",(req,res) => {

    let body = req.body
    
    Contents.findOneAndUpdate(
        {_id : body.contentsId},
        {
           title : body.title,
            contents: body.contents,
            textcontents: body.textcontents,
            images : body.images
            
        },
        { new : true },
        (err,doc) => {
            if(err) {        
                return res.status(400).json({success: false, err})
            }
          
            return res.status(200).json({
                success : true,
            })
        }
    
    ) 

  

})


router.post("/delete",(req,res) => {

    let body = req.body
    Contents.findOneAndDelete(
        {_id : body.contentId},
        (err,doc) => {
            if(err) {        
                return res.status(400).json({success: false, err})
            }
          
            return res.status(200).json({
                success : true,
            })
        }
    
    ) 

  

})



module.exports = router;