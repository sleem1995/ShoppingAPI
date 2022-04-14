const router = require("express").Router();

const {
    Get,
    Create,
    Update,
    Delete
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
        let user = await Create(body);
        res.status(201).json({ User: user });
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
    const { id } = req.params;
    const body = req.body;

    try {
        console.log(id);
        const user = await Update(id,body);
        console.log(user);
        res.status(201).json({ User: user });
    } catch (err) {
        res.status(422).json(err);
    }

})

router.delete("/:id", async(req, res, next) => {
    const { id } = req.params;
    try {
        console.log(id);
        const user = await Delete(id);
        console.log(user);
        res.status(201).json({ User: user });
    } catch (err) {
        res.status(422).json(err);
    }

})

module.exports = router;