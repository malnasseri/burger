
//requiring mysql package
var mysql = require("mysql");
// Create the MySQL connection object
var connection; 

	if(process.env.JawsDB_URL) {

		connection = mysql.createConnection(process.env.JawsDB_URL);
   }else {
   		connection = mysql.createConnection({

   			host: "localhost",
            user: "root",
            password: "",
            database: "burgers_db"
   		})


   		
   }





connection.connect();
// Exporting connection
module.exports = connection;