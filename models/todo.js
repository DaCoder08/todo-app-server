const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    userId:String,
    title:String
})

var Todo = module.exports = mongoose.model("Todo", schema)

module.exports.addTodo = (user, title) => {
    var newTodo = new Todo({
        userId: user.id,
        title
    })

    newTodo.save()

    return newTodo
}


module.exports.getTodosByUser = async (id) => {
    var todos = await Todo.find({userId:id});

    return todos
}


