// alert("Test 123")//Message box...

/*var answer = prompt("What do U want to do today?")
var check = confirm("Do U really want to see UR answer?")
if (check) {
	alert(answer)	
}*/


function add(first, second) {
	return (first + second)
}
function sub(first, second) {
	return (first - second)
}
function mul(first, second) {
	return (first * second)
}

var operation = function(first, second, type, result){
	this.first = first;
	this.second = second;
	this.type = type;
	this.result = result;

	this.getOperation = function(){
		return JSON.stringify({"first": this.first, "second": this.second, "type" : this.type, "result" : this.result});
	}
}

var previousOperations = [];//empty array...
var count = 5;