const router = require("express").Router();
router.get("/sellertest",(req,res)=>{
    res.send("seller Test successfully")
})

router.post("/userpost",(req,res)=>{
    const username = req.body.username;
    console.log(username);
    res.send("Your name is" + " " + username); 
})

module.exports=router;