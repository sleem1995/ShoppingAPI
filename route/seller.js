const router = require("express").Router();

const { Create,findOne  } = require("../controller/seller");


router.get("/:name",async(req,res, next)=>{
    try{
    var {name} =req.params;
    var seller =await findOne(name)
    res.status(201).json(seller);
    }
    catch(err)
    {
    res.status(422).json(err);

    }
})

router.post("/", async(req, res, next) => {
    const body = req.body;
    
        var seller = await Create(body);
        res.json(seller);
    
})

module.exports= router;