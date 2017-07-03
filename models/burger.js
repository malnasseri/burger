// Importing the ORM object to implement functions that will interact with the database
var orm = require('../config/orm.js');
// creating burger object
var burgers = {
				// Select all burger table entries
				all: function(cb){
		
						orm.all('burgers', function(res){
			
								cb(res);
		});
	},
	// The variables cols and vals are arrays
	create: function(col, vals, cb){
		
						orm.create('burgers', col, vals, function(res){
			
								cb(res);
		});
	},
	// The objColVals is an object specifying columns as object keys with associated values
	update: function(objColVals, condition, cb){
		
						orm.update('burgers', objColVals, condition, function(res){
			
								cb(res);
		});
	}
};

// Exporting our database functions 
module.exports = burgers;