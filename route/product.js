const product = require("../models/product")
const router = require("express").Router();
const {Create,GetAll,GetByName,Update, Delete} = require("../controller/proudct");

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

        GetAll().then((product)=>{
        res.status(200).json(product)
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


router.put("/:id", async(req, res, next) => {
    const { id } = req.params;
    const body = req.body;

    try {
        const product = await Update(id,body);
        res.status(201).json(product);
    } catch (err) {
        res.status(422).json(err);
    }

})


module.exports=router;