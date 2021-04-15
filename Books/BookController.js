const express = require("express");
const router = express.Router();
const Book = require("./Book");



router.get("/book/create", (request, response)=>{
  response.render("book/index");
});

router.post("/book/save", (request, response)=>{
  let title = request.body.title;
  let author = request.body.author;
  let isbn = request.body.isbn;

  if(title && author && isbn){
    Book.create({title, author, isbn});
  }
    response.redirect("/");
});

router.post("/book/delete", (request, response)=>{
  let id = +request.body.id;
  if(!isNaN(id) && id !== undefined){
    Book.destroy({where: {id}}).then(()=>{
      response.redirect("/");
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
        response.redirect("/");
      }
    }).catch((error)=>{
      response.redirect("/");
    });
    
  }else{
    response.redirect("/");
  }
});

router.post("/book/update", (request, response)=>{
  let id = request.body.id;
  let title = request.body.title;
  let author = request.body.author;
  let isbn = request.body.isbn;

  Book.update({title, author, isbn}, {where: {id}}).then(()=>{response.redirect("/");});

});

module.exports = router;