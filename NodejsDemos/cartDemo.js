//cartDemo.js
module.exports.title ="NodeJsdemo for CDAC Training"
exports.developedBy ="Phaniraj"
exports.desc ="For Training purposes" 
module.exports.shoppingCart = (function(){
	var cart =[];
	function add(item){
		cart.push(item);
		console.log("Item added");
	}

	function get(){
		return cart;
	}

	return {
		"addToCart" : add,
		"getAll" : get
	}

})();//As the module does not have any name, its called as Anonymous modules. If UR exports is having a name, its called as named module.
