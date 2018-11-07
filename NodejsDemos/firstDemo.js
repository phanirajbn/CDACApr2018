console.log("Testing node app")

function add(first, second){
	return first + second;
}

function sub(first, second){
	return first - second;
}

function mul(first, second){
	return first * second;
}

function div(first, second){
	return first / second;
}

var emp = function(id, name, address){
	this.name = name;
	this.id = id;
	this.address = address;
}

var firstEmp = new emp(123, "Phaniraj", "Bangalore");
console.log(firstEmp)
//alert("Will this work?")
/*console.log("Added value is " + add(123,34))
console.log("Subtracted value is " + sub(123,34))
console.log("Product value is " + mul(123,34))
console.log("Division value is " + div(123,34))
*/
