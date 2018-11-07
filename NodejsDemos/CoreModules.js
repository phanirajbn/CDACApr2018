//NodeJs gives us a host of ready to use APIS in the form of modules that U could use in developing the Applications. This includes fs(FileSystem), os("OS"), util(String manipulations), http(For Http Servers) and many more. Refer Nodejs.org to know more of common modules of node.js
var fs = require('fs');
var util = require('util');
var os = require('os');

var filename = 'firstDemo.js'
//Reading Text based files...
var contents = fs.readFileSync(filename, 'utf8')
//console.log(contents);
//Fs has 2 functions to read text based files: readFileSync and readFile. readFile takes a callback function thro which U could read the contents. readFileSync is a synchronous function that allows to read the file and the program should wait till the reading is complete.

/*fs.writeFile("SampleDemo.txt", "Some Text content to write from Nodejs app", function(err){
	console.log(err)
})
*/
//Reading binary Files....
/*fs.open(filename, 'r', function(err, fd){

})
*/
//////////////////////read all the info about Ur directory////
/*var dir = '../NodejsDemos';
fs.readdir(dir, function(err, files){
	//console.log(files);
	for (var i = 0; i < files.length; i++) {
		fs.stat(files[i], function(err, stats){
			console.log(stats);
			console.log("----------------------------------");
		})
	}
})
*/
///////////////////////////Using util///////////////////
/*var name ='Phaniraj';
var address ='RR Nagar, Bangalore';
var age = 41;

var strMsg = util.format("My Name is %s, I am from %s and I am %d years old", name, address, age);
console.log(strMsg);
*/////////////////////////Using OS Features/////////////////
console.log(os.type());
console.log((os.uptime()/3600) / 24 + 'days');
console.log(os.hostname());
 







