const express = require("express");
const fs = require('fs');
//const { chats } = require('./data/data.js');

const app = express();

app.get("/", (req,res) =>{
  res.send("Api runnin")
});


app.get("/chats", function(req,res){
    fs.readFile(__dirname + '/' + "data.json", 'utf8', function(err, dataa){
        console.log(dataa);
        res.end(dataa);
    })
});

app.listen(5000, console.log("Api runnin"));