var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	path = require('path');



// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname,'public')));


http.listen(port, function(){
	console.log("server started");
});