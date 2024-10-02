const mongoose = require("mongoose")
require('dotenv').config();


mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Connection error', err);
  });;
const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports ={
    todo
}

