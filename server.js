	//requiring our packages
	var express = require('express');
	var bodyParser = require('body-parser');
	var methodOverride = require('method-override')

	var app = express();

	//Serve static content for the app from the "public" directory in the application directory.
	app.use(express.static(process.cwd() + '/public'));

	app.use(bodyParser.urlencoded({
		
				extended: false
	}))

	// override with POST having ?_method=DELETE
	app.use(methodOverride('_method'))
	// sets Handlebars as the view engine
	var exphbs = require('express-handlebars');

	app.engine('handlebars', exphbs({
	    
	    		defaultLayout: 'main',
	}));

	app.set('view engine', 'handlebars');
	// Import routes and give the server access to them
	var routes = require('./controllers/burgers_controller.js');

	app.use('/', routes);
	app.use("/update", routes);
	app.use("/create", routes);

	var port = process.env.PORT || 3000;

	app.listen(port);

	