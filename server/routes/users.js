const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth")






router.get("/auth",auth, (req,res) => {
    res.status(200).json({
        _id : req.user._id,
        name : req.user.name,
        userId : req.user.userId,
        email : req.user.email,
        isAdmin : req.user.role === 0 ? false:true,
        isAuth: true,
        role : req.user.rol,
    })
})



router.post("/register", (req, res) => {
    const user = new User(req.body);
   
    user.save((err,doc) => {
        if(err){
            console.log(err);
            return res.json( {success : false,err});
        } 
        return res.status(200).json({
            success : true
        })

    })


})





router.post("/login", (req,res) => {
   
    console.log(req.body)
    User.findOne({userId : req.body.id} ,(err,user)=>{
        if(!user){
            return res.json({
                loginSuccess: false,
                massage: "로그인 실패"
            })
        };

        user.comparePassword(req.body.password, (err,isMatch) => {
            if(!isMatch){
                return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다."})
            }

            user.generateToken((err,user) => {
                if(err) return res.status.send(400)
                res.cookie("w_authhExp",user.tokenExp);
                res.cookie("w_auth",user.token)
                    .status(200)
                    .json({
                        loginSuccess:true,userId:user.userId
                    })

            })

        })


    })

})

router.post("/logout",auth ,(req,res) => {
    
    User.findOneAndUpdate({ _id : req.user._id} , {token: "", tokenExp : ""} ,(err,doc) => {
        
        if(err) res.json({success: false,err})
        return res.status(200).send({
            success:true
        })
    });


});






module.exports = router;