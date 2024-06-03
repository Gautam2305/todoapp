const express = require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");

const app = express();

app.use(express.json());

app.post('/todo', async (req,res)=>{
    const inputTodo = req.body;
    const parseTodo = createTodo.safeParse(inputTodo);
    if(!parseTodo.success){
        req.statusCode(411).json({
            msg: "input is wrong"
        })
        return;
    }
    await todo.create({
        title: parseTodo.title,
        description: parseTodo.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })
    
});
app.get('/todos', async (req,res)=>{
    const todos = await todo.find();

    res.json({
        todos,
    })
});

app.put('/completed', async (req,res)=>{
    const updateTodo = req.body;
    const parseUpdate = updateTodo.safeParse(updateTodo);
    if(!parseUpdate.success){
        req.statusCode(411).json({
            msg: "updated input is wrong"
        })
        return;
    }
    await todo.update({_id: req.body.id}, {completed:true});
    res.json({
        msg: "Todo marked as completed"
    })
});
app.listen(3000, ()=>{
    console.log("port is listening");
})