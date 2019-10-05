const express = require("express")
const User = require("../models/users")
const Todo = require("../models/todo")
const jwt = require("jsonwebtoken")

var router = express.Router();

// middleware

var routeGuard = async (req, res, next) => {

    token = req.headers["auth"]


    if(!token){
        res.json({
            msg:"Unauthorized",
            success:"false"
        })
    }else{
        try{
            var decoded = jwt.decode(token, "my_secret")
            if(decoded == null){
                res.json({
                    msg:"Unauthorized",
                    success:"false"
                })
            }
            else{
                var user = await User.findById(decoded.id);
                
                if(!user){
                    res.json({
                        msg:"Unauthorized",
                        success:"false"
                    })
                }else{
                    next()
                }
            }
        }catch(e){
            res.json({
                msg:"Unauthorized",
                success:"false"
            })
        }
    }
}

// api routes

router.post("/add", routeGuard, (req, res) => {
    var title = req.body.title;

    var user = jwt.decode(req.headers["auth"], "my_secret")

    var todo = Todo.addTodo(user, title);

    res.json({
        msg:"todo created",
        todo
    })
})

router.post("/getAll", routeGuard, async (req, res) => {
    var id = jwt.decode(req.headers["auth"], "my_secret").id;

    res.json({todos:await Todo.getTodosByUser(id)})
})


router.post("/delete/:id", routeGuard, async (req, res) => {
    var id = req.params.id;

    var todo = await Todo.findByIdAndDelete(id)

    res.json(await todo)
})

module.exports = router
