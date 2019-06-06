// declare a function with one arg
var product = {name: "chairs", price: 14.99}
// function cost (arg1) {
//     return arg1.name + " " + arg1.price
// }

//functions returns the name and price of an object we pass through it

cost = (arg1) => `${arg1.name} ${arg1.price}`
console.log(cost(product));
