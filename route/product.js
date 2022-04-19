const product = require("../models/product")
const router = require("express").Router();
const {Create,GetAll,GetByName,Update, Delete,GetProductBySellerName,SellerProducts} = require("../controller/proudct");
const {CheckSeller} =require("../controller/seller");
const jwt = require("jsonwebtoken");
require("dotenv").config()

router.post("/", async(req, res, next) => {
    const body = req.body;
    try {
        let product = await Create(body);
        res.status(201).json(product);
    } catch (err) {
        res.status(422).json(err);
    }
})

router.get('/', (req, res, next) => {
    var {authorization}=req.headers;
    var decoded = jwt.verify(authorization, process.env.SECRET_KEY);
    console.log("decoded "+decoded.id)
    CheckSeller(decoded.id).then(seller=>{
        if(seller){
            console.log("Check "+true+" "+seller);
            SellerProducts(decoded.id).then(products=>{
                console.log(products);
                res.status(201).json(products);
            });
        }
        else{
            console.log("Check "+false+" "+seller);
            res.status(422).json(err);
        }
    })
    
})
router.get('/seller/:name', (req, res, next) => {
    const {name}=req.params;
    console.log(name);
    GetProductBySellerName(name).then((products)=>{
        console.log(products);
    res.status(200).json(products)
}).catch((error)=>{
    res.status(422).json(error)
})

})

router.get("/:name", async(req, res, next) => {
    const { name } = req.params;
    try {
        const product = await GetByName(name);
        res.status(200).json(product);
    } catch (err) {
        res.status(422).json(err);
    }
})

router.delete("/:name", async(req, res, next) => {
    const { name } = req.params;
    try {
        const product = await Delete(name);
        res.status(201).json(product);
    } catch (err) {
        res.status(422).json(err);
    }

})


router.patch("/:id", async(req, res, next) => {
    const { id } = req.params;
    const body = req.body;

    try {
        console.log("product");
        const product = await Update(id,body);
        console.log(product);
        res.status(201).json(product);
    } catch (err) {
        res.status(422).json(err);
    }

})


module.exports=router;