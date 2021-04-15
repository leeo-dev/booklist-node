const express = require("express");
const session = require("express-session");
const connection = require("./database/database");
const BooksController = require("./Books/BookController");

const server = express();
server.set('view engine', 'ejs'); 

//Database
connection.authenticate().then(() => {
  console.log("Conexão feita com sucesso!")
}).catch((error) => {
  console.log(`Erro ao se conectar com o Banco de Dados ${error}`)
});

server.use(express.static('public'));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use("/", BooksController);

server.get("/", (request, response)=>{
  response.render("index");
});

server.listen(3000, ()=>{
  console.log("Server is running");
});