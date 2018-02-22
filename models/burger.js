var orm = require('../config/orm.js');

var burgers = {
	// orm to show all values in the burger database.
	all: function (callback) {
		orm.all('burgers', function (result) {
			callback(result);
		});
	},
	// orm to add values to the burger database
	// cols and vals are arrays
	create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured", 'lettuce', 'tomatoes', 'onions', 'ketchup', 'mayo', 'pickles', 'bacon', 'cheddar', 'american', 'bbq'
    ], [
      name, false
    ], cb);
  },
	// orm to update values in the burger database
	// objColVals would be the columns and values that you want to update	
	update: function (objColVals, condition, callback) {
		orm.update('burgers', objColVals, condition, function (result) {
			callback(result);
		});
	},
	// orm to delete from the burger database - future use.
	delete: function (condition, callback) {
		orm.delete('burgers', condition, function (result) {
			callback(result);
		});
	}
};

module.exports = burgers;
