//app.js UR main app....
var allInfo = require('./cartDemo');

console.log(allInfo);


var cart = require('./cartDemo').shoppingCart;//named Modules....
console.log(cart);
cart.addToCart({"id":3, "name" :"Mi Note 4", "price" : 11000})
cart.addToCart({"id":2, "name" :"Mi Max2", "price" : 18000})
cart.addToCart({"id":1, "name" :"Samsung Guru 2000", "price" : 1000})

var basket = cart.getAll();
console.log("List of items with us");
for (var i = 0; i < basket.length; i++) {
	console.log(basket[i].name)
}