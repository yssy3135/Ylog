const express = require('express');
const router = express.Router();
const { User } = require("../models/User");





router.get("/auth", (req,res) => {
    res.status(200).json({
        _id = req.user._id,
        name = req.user.name,
        id = req.user.id,
        email : req.user.email,
        isAdmin : req.user.role === 0 ? false:true,
        role : req.user.rol,
    })
})



router.post("/register", (req, res) => {
    const user = new User(req.body);
    console.log(req.body);
    user.save((err,doc) => {
        if(err) return res.json( {success : false,err});
        return res.status(200).json({
            success : true
        })

    })


})





router.get("/login", (req,res) => {
   

    console.log(req.body)
    User.findOne({id : req.body.id} ,(err,user)=>{
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
                res
                    .cookie("w_auth",user.token)
                    .status(200)
                    .json({
                        loginSuccess:true,usertoken:user._token
                    })

            })

        })


    })

}) 



module.exports = router;