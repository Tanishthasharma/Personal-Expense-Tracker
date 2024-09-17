const express = require('express')
const cors = require('cors');
const {db} = require('./db/db');
const{readdirSync} = require('fs')
const app = express()
require('dotenv').config()
//variable
const PORT = process.env.PORT
//const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not defined


//middleware
app.use(express.json());
app.use(cors())

//To check ki API is working or not in postman
// app.get('/' , (req,res) =>{
//     res.send('Hello World');
// });

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)))

const server = () =>{
  db();
  app.listen(PORT,() =>{
     console.log('listening to port:' , PORT)
  });
};

server()    //running above function