const express = require("express")
const User = require("../models/users")

var router = express.Router();

router.post("/add", (req, res) => {
    var user = User.registerUser(req.body);
    console.log("hi")
    res.json({
        msg:"user created",
        user
    })
})

router.post("/auth", async (req, res) => {
    var resp = await User.authenticate(req.body);
    console.log("hi")
    res.json(resp)
})



module.exports = router