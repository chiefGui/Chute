var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	path = require('path');

app.use('/', express.static(path.join(__dirname,'public')));


http.listen('3000', function(){
	console.log("server started");
});