const express = require("express");
const session = require("express-session");

const server = express();
server.set('view engine', 'ejs'); 

server.use(express.static('public'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.get("/", (request, response)=>{
  response.render("index");
});

server.listen(3000, ()=>{
  console.log("Server is running");
});