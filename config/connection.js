
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
            database: "ebn5dr77n1kmyr6o"
   		})


   		
   }





connection.connect();
// Exporting connection
module.exports = connection;