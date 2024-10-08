const express = require('express')
const {createTodo, updateTodo} = require('./types')
const {todo} = require('./db')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(cors())
app.post('/todo',async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    //put it in mongodb;
    await todo.create({
        title:createPayload.title,
        description: createPayload.description,
        completed:false
    })
    res.json({
        msg: "Todo created"
    })
})

app.get('/todos',async function(req,res){
    try {
        const todos = await todo.find({});
        res.json({
            todos
        });
    } catch (error) {
        res.status(500).json({ msg: "Error fetching todos" });
    }
})


app.put('/completed',async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id :req.body.id},{
          completed:true  
        })
        res.json({
            msg: "Todo marked as compelete"
        })
    })




const PORT = process.env.PORT || 3000;  // Change the port number here
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
