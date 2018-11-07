//Jade is a template view engine for generting Views in a typical MVC Applications where a seperate Views for HTML is obtained thro View Engines. ViewEngine is a parser for generating the Views for the requests the User makes thro URL.Vash is also another ViewEngine U could use to render Views in the syntax of RAZOR. 
var app = require("express")();

app.set('view engine', 'jade');

app.get('/', function(req, res){
	res.render('sampleDemo')
})

app.get('/DBDemo', function(req, res){
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
	console.log('express is runing....')
})