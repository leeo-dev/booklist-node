const express = require("express");
const router = express.Router();
const Book = require("./Book");

router.get("/books", (request, response)=>{
  Book.findAll().then((books)=>{
  response.render("list", {books});
  });
});

router.post("/book/save", (request, response)=>{
  let title = request.body.title;
  let author = request.body.author;
  let isbn = request.body.isbn;

  if(title && author && isbn){
    Book.create({title, author, isbn});
    response.redirect("/books");
  }else{
    response.redirect("/");
  }
});

router.post("/book/delete", (request, response)=>{
  let id = +request.body.id;
  if(!isNaN(id) && id !== undefined){
    Book.destroy({where: {id}}).then(()=>{
      response.redirect("/books");
    })
  }
})

module.exports = router;