const express = require("express");
const router = express.Router();
const Book = require("./Book");

router.get("/books", (request, response)=>{
  Book.findAll().then((books)=>{
  response.render("book/list", {books});
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


router.get("/book/edit/:id", (request, response)=>{
  let id = request.params.id;
  if(!isNaN(id)){
    Book.findByPk(id).then((book)=>{
      if(book != undefined){
        response.render("book/edit", {book});
      }else{
        response.redirect("/books");
      }
    }).catch((error)=>{
      response.redirect("/");
    });
    
  }else{
    response.redirect("/books");
  }
});

router.post("/book/update", (request, response)=>{
  let id = request.body.id;
  let title = request.body.title;
  let author = request.body.author;
  let isbn = request.body.isbn;

  response.json({id, title, author, isbn});
});

module.exports = router;