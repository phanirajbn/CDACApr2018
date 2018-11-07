//U could use Node.js Debugger which is a command line Debugger ability for debugging node apps...
var fs = require('fs');
fs.readFile("data.json", 'utf8', function(err, data){
	debugger;
	console.log(data);
	if(err){
		console.log(err);
	}
})