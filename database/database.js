const Sequelize = require("sequelize");
const connection = new Sequelize("bookslist", "root", "", {host: "localhost", dialect: 'mysql', timezone: "-03:00"});

module.exports = connection;