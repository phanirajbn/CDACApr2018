var http = require('http');//using core module....
var parse = require('url').parse;
var fs = require('fs');
var join = require('path').join;

var root = __dirname;//Root directory of UR App that contain the Node modules....

function errorPage(res){
	res.writeHead(200, {'Content-type' : "text/html"})
	res.write("<h2>OOPs!!! Something wrong happened</h2>");
	res.end();

}
var server = http.createServer(function(req, res){
	var info = req.url;
	res.writeHead('200', {'Content-type' : 'text/html'})
	/*if(info != "./favicon.ico"){
		//console.log(info);
		console.log("Request for the website at port:1234")
		res.write("Test123");
		res.end();
	}*/
	var url = parse(req.url);
	var path = join(root, url.pathname);

	if(req.url != '/favicon.ico'){
		switch(req.url){
			case '/':
			  {
			  	path = join(root, 'HomePage.html'); 	
			  	var stream = fs.createReadStream(path);
				stream.on('data', function(arg){
				res.write(arg);
				})
			  }
			  break;
			case "/CDAC":

				res.write("<h2>CDAC Website</h2>");
				res.end();
				return;
			case "/Student":
				res.write("<h2>Student Website</h2>");
				res.end();
				return;
			case "/Courses":
				res.write("
		stream.on('end', function(){
			res.end();
		})
		
		stream.on('error', function(){
			errorPage(res);
		}) 
	}
})

server.listen(1234);