const Sequelize = require("sequelize");
const connection = require("../database/database");

const Book = connection.define("books",{
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isbn: {
    type: Sequelize.STRING,
    allowNull: false
  },
});
 
Book.sync({force: false});
module.exports = Book;