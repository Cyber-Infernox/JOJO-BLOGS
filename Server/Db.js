const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
db.connect(function (err) {
  if (err) {
    console.log("Error connecting to DB");
  } else {
    console.log("Connection established");
  }
});

module.exports = { db };
