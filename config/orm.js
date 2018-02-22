// Importing MySQL connection object
var connection = require('../config/connection.js');

// function for generating MySQL syntax
function printQuestionMarks(num){
  
  			var arr = [];

  			for (var i=0; i<num; i++){
    
    				arr.push('?')
  };

  			return arr.toString();
};

function objToSql(ob){
  
		   //column1=value, column2=value2,...
		   var arr = [];

  		   for (var key in ob) {
    			
    				arr.push(key + '=' + ob[key]);
  };

  		   return arr.toString();
};

// Create the ORM object to perform SQL queries
var orm = {
	// Function that returns all table entries
	all: function(tableInput, cb){
			 // Construct the query string that returns all rows from the target table
		     var queryString = 'SELECT * FROM ' + tableInput;
		     // Perform the database query
			 connection.query(queryString, function(err, result){
			
					if(err) throw err;
					// Returns results in callback
					cb(result);
		});
	},
	// Function that inserts a single table entry
create: function (table, cols, vals, callback) {
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + cols.toString();
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMarks(vals.length);
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, vals, function (error, result) {
			if (error) throw error;
			callback(result);
		});
	},
	// orm to update values in the burger database
	// objColVals would be the columns and values that you want to update
	update: function (table, objColVals, condition, callback) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objColVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		console.log(queryString);
		connection.query(queryString, function (error, result) {
			if (error) throw error;
			callback(result);
		});
	},
	delete: function (table, condition, callback) {
		var queryString = 'DELETE FROM ' + table;
		queryString = queryString + ' WHERE ';
		queryString = queryString + condition;

		connection.query(queryString, function (error, result) {
			if (error) throw error;
			callback(result);
		});
	}
};
//exporting orm object
module.exports=orm;

