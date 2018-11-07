//Connecting to database and displaying data thro JADE

var express = require('express')
var app = express();

app.set('view engine', 'jade');

app.get('/', function(req, res){
	var sql = require('mysql');
	var config = {
		server:'localhost',
		database:'CDACTraining',
		user:'root',
		password:''
	}
	
	var con	 = sql.createConnection(config);
	con.query('select * from emptable', function(err, results, fields){
		if(err) console.log(err);
		res.render('empList', { list: results});	
	})
})

var server = app.listen(1234, function(){
	console.log("express is running")
	})
