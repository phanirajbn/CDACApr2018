var express = require('express');
//This returns a class of Express to be used in ur app...
var parser = require('body-parser');
var app = express();
app.use(parser.urlencoded({extended:false}));

//The object of express is capable for routing Http Requests, configuring middleware, rendering static html pages and creating mvc applications. 

/*app.get('/', function(req, res){
	res.send('<h1>HomePage.html</h1>')
})

app.get('/Cdac', function(req, res){
	res.send('<h1>CDAC.html</h1>')
})
app.get('/Students', function(req, res){
	res.send('<h1>StudentsPage.html</h1>')
})
app.get('/Courses', function(req, res){
	res.send('<h1>List of Courses.html</h1>')
})*/

app.get('/', function(req, res){
	//res.sendFile( __dirname + "/Registration.html");
	res.sendFile(__dirname + '/data.json')
})

app.get('/registerData', function(req, res){
	response = {
		username : req.query.username,
		email : req.query.email
	};
	res.end(JSON.stringify(response))
});
app.post('/registerData', function(req, res){
	var name = req.body.username + ' ' + req.body.email;
	res.send(name + ' Submitted to the database');
})

var server = app.listen(1234, function(){
	console.log("Express running ....")

})