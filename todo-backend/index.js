// Express
const express = require('express');
const mongoose = require('mongoose')

//instance of express 
const app = express();
app.use(express.json());

//Sample in storage medium
let todos = [];

// Creating schema
const todoSchema = new mongoose.Schema({
  title: String,
  desc: String
})

// Connecting mongoose
mongoose.connect('mongodb://localhost:27017/mern-app')
.then(() => {
  console.log('DB connected')
})
.catch((err) =>{
  console.log(err)
})

//Create a new todo
app.post('/todos',(req,res) => {
  const {title, desc} = req.body;
  const newTodo = {
    id: todos.length + 1, 
    title,
    desc
  };
  todos.push(newTodo);
  console.log(todos);
  res.status(201).json(newTodo);
})

//Get all items
app.get('/todos', (req,res) =>{
  res.json(todos);
  e
})
 

//start the server
const port = 3005;
app.listen(port, () => {
  console.log("Server is listening to the port " + port);
})