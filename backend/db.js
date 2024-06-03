const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://gautamkiran123:dElw0UD5nYGFoKzD@cluster0.kkdxlin.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}