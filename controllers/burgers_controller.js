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
		
	
router.post('/burgers/create', function (req, res) {
  burgers.create(['burger_name', 'devoured', 'lettuce', 'tomatoes', 'onions', 'ketchup', 'mayo', 'pickles', 'bacon', 'cheddar', 'american', 'bbq'], [req.body.burger_name, req.body.devoured, req.body.lettuce, req.body.tomatoes, req.body.onions, req.body.ketchup, req.body.mayo, req.body.pickles, req.body.bacon, req.body.cheddar, req.body.american, req.body.bbq], function () {
    res.redirect('/');

  });
});

// put route -> back to index
router.put('/burgers/update/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  console.log('condition', condition);

  burgers.update({ devoured: req.body.devoured }, condition, function () {
    res.redirect('/');
  });
});

router.post('/burgers/delete/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burgers.delete(condition, function () {
    res.redirect('/');
  });
});



// Exporting our routes 
module.exports = router;
