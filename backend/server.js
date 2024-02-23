const express = require("express");
const fs = require('fs');
var user = require('./data.json')
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get("/", (req,res) =>{
  res.send("Api runnin")
});


// call a json object using fs module
// app.get("/chats", function(req,res){
//     fs.readFile(__dirname + '/' + "data.json", 'utf8', function(err, dataa){
//         //console.log(dataa);
//         res.end(dataa); // res.end() gives the formated json object
//         // res.send() gives a text file 
//     })
// });

// you can directly call a json object without using fs module 
app.get("/user", (req,res) => {
  res.send(user);
})

app.get("/user/:id", (req,res) => {
  //console.log(user[req.perms.is])

  
  res.send(user[req.params.id]);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Api running on ${PORT}`));