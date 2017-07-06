// requiring our depencies
var express = require('express');
var router = express.Router();
// Import the model (burger.js) to use its database functions
var burgers = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function(req, res){
	res.redirect('/burgers')
});


router.get('/burgers', function(req, res){

		burgers.all(function(data){
			
				var hbsObject = {burgers: data};

				console.log(hbsObject);

				res.render('index', hbsObject);
	});
});
		
	
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});















// Exporting our routes 
module.exports = router;
