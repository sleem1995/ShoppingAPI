const router = require("express").Router();
const jwt = require("jsonwebtoken");
require("dotenv").config()

const {
    Get,
    Create,
    Update,
    Delete,
    login
} = require("../controller/user");

router.get("/sellertest", (req, res) => {
    res.send("seller Test successfully")
})

// router.post("/userpost", (req, res) => {
//     const username = req.body.username;
//     console.log(username);
//     res.send("Your name is" + " " + username);
// })

router.post("/", async(req, res, next) => {
    const body = req.body;
    try {
        let token = await Create(body);
        res.status(201).json({ Token: token });
    } catch (err) {
        res.status(422).json(err);
    }
})

router.get("/:id", async(req, res, next) => {
    const { id } = req.params;
    try {
        console.log(id);
        const user = await Get(id);
        console.log(user);
        res.status(201).json({ User: user });
    } catch (err) {
        res.status(422).json(err);
    }

})

router.patch("/:id", async(req, res, next) => {
    console.log("Patch");
    const { id } = req.params;
    const body = req.body;
    var {authorization}=req.headers;
    var decoded = jwt.verify(authorization, process.env.SECRET_KEY);
    var AuthID=decoded.id;
    try {
        console.log("B ID")
        var AuthID=decoded.id;
        console.log("B ID")
        console.log("decoded "+AuthID) 
        console.log(id);
        const user = await Update(id,AuthID,body);
        console.log(user);
        res.status(201).json({ User: user });
    } catch (err) {
        res.status(422).json(err);
    }

})

router.delete("/:id", async(req, res, next) => {
    const { id } = req.params;
    var {authorization}=req.headers;
    var decoded = jwt.verify(authorization, process.env.SECRET_KEY);
    var AuthID=decoded.id;
    try {
        console.log(id);
        const user = await Delete(id,AuthID);
        console.log(user);
        res.status(201).json({ User: user });
    } catch (err) {
        res.status(422).json(err);
    }

})

router.post("/login", async(req, res, next) => {
    const body = req.body;
    try {
        console.log(" Rout "+process.env.SECRET_KEY);
        let user = await login(body);
        res.status(201).json({ User: user });
    } catch (err) {
        res.status(422).json(err);
    }
})

module.exports = router;