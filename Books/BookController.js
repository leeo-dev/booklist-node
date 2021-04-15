const express = require("express");
const router = express.Router();
const Book = require("./Book");

router.get("/books", (request, response)=>{
  response.send("teste");
});

module.exports = router;