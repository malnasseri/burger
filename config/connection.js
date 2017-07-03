
//requiring mysql package
var mysql = require("mysql");
// Create the MySQL connection object
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});
// Make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Exporting connection
module.exports = connection;