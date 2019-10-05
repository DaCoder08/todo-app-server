const express = require("express");
const mongoose = require("mongoose")
const users = require("./api/users.js")
const todos = require("./api/todos.js")

// mongoose.connect("mongodb://localhost/todo-app", {useNewUrlParser:true})
mongoose.connect("mongodb+srv://Bob:bob123@cluster0-qdwaj.mongodb.net/todo-app", {useNewUrlParser: true})

var app = express()

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "*");
// 	next();
// });  

app.use(express.static('public'))

app.get("/*", function (req, res) {
	res.sendFile(__dirname + "/public/index.html")
})

app.use(express.json())

app.use("/users", users)

app.use("/todos", todos)

app.listen(3000)
