const express = require("express");
const { createTodo } = require("./types");

const app = express();

app.use(express.json());

app.post('/todo', (req,res)=>{
    const inputTodo = req.body;
    const parseTodo = createTodo.safeParse(inputTodo);
    if(!parseTodo.success){
        req.statusCode(411).json({
            msg: "input is wrong"
        })
        return;
    }
    
});
app.get('/todos', (req,res)=>{

});

app.put('/completed', (req,res)=>{
    const updateTodo = req.body;
    const parseUpdate = updateTodo.safeParse(updateTodo);
    if(!parseUpdate.success){
        req.statusCode(411).json({
            msg: "updated input is wrong"
        })
        return;
    }
});
app.listen(3000, ()=>{
    console.log("port is listening");
})