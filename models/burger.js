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
	create: function(name, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [name, false], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};
// Exporting our database functions 
module.exports = burgers;