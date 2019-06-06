
// chalenge 1
var person = { fName: "Arthur", lastName: "Dent"}

console.log(`${person.fName} ${person.lastName}`)
// challenge 2
var person = {
    fName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth"
}
console.log(person.homePlanet);

// challenge 3
var person = {
    fName: "Arthur",
    lastName: "Dent",
    homePlanet: "Earth",
    getData() {return `${this.fName} ${this.lastName} is from planet ${this.homePlanet}`}
}
console.log(person.getData());

// challenge 4
// declare a function with one arg
var product = {
    name: "chairs",
    price: 14.99,
    cost() {return `${this.name} + ${this.price}`},
    cost2(){return this.price +20}
}

console.log(product.cost());
console.log(product.cost2());
// functions returns the name and price of an object we pass through it

// cost = (arg1) => `${arg1.name} ${arg1.price}`
// console.log(cost(product));

// challenge 5
var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread","peanut butter","banana"]
}
console.log(lunch.ingredients[2]);

// challenge 6


// chalenge 7
console.log("challenge 7");
function showIngridients (arg1){
    return `the inngridients for ${arg1.name} ${arg1.type} are ${arg1.ingredients[0]} ${arg1.ingredients[1]} ${arg1.ingredients[2]}`
}

console.log(showIngridients(lunch));

//Challenge 8

var lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread","peanut butter","banana"],
    showIngridients(){
        return `the inngridients for ${this.name} ${this.type} are ${this.ingredients[0]} ${this.ingredients[1]} ${this.ingredients[2]}`}
}
console.log(lunch.showIngridients())

// class challenges

// class Coffee {
//   constructor(type, cream=0, sugar=0){
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = false
//   }
//
//   coffeeProfile ()  {
//     return(`${this.type}: ${this.creams()}, ${this.sugars()}`)
//   }
//
//   creams()  {
//     if (this.cream > 0){
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }
//
//     sugars ()  {
//     if (this.sugar > 0){
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }
//
// var blackCoffe = new Coffee("black",1,2)
// console.log(blackCoffe.type);
// console.log(blackCoffe.coffeeProfile());

//Exercise 4
class Latte {
    constructor(type, milk, shots) {
        this.type = type
        this.milk = milk
        this.shots = shots
    }
    getData() {
        return `the ${this.type} has ${this.milk} shots of milk and ${this.shots} shots of coffee`
    }
}
var ourCoffee = new Latte("latte" , 2, 3)
console.log(ourCoffee.getData());
var othCoffee = new Latte("regular", 1, 5)
console.log(othCoffee.getData(  ));

//Exercise 8
var budget = 200
class Product {
    constructor(product , price){
        this.product = product
        this.price = price
    }
    inBudget(){
        return this.price > budget ? `This ${this.product} is out of budget`:`this ${this.product} is in budget`
    }
}

var sewingMachine = new Product ("Sewing machine",300)

console.log(sewingMachine.inBudget());

//Exercise 9
class Cylinder {
    constructor(radius, height){
        this.radius = radius
        this.height = height
    }
    getData(){
        let volume = this.radius* Math.PI * 2 * this.height
        return `the volume is ${volume}`
    }
}

var ourCylinder = new Cylinder (5,2)
console.log(ourCylinder.getData());

//Exercise 10
var cartItems = [
  {
    name: "banana",
    price: 2.34,
    weight: 1.2
  },
  {
    name: 'Cereal',
    price: 5.67,
    weight: 2.2
  },
  {
    name: 'Gogurt',
    price: 3.99,
    weight: 3.1
  }
]
//
// sumFunc = (arr1) => {
//     var totPr = 0
//     var totWe = 0
//     for(let i=0; i<arr1.length;i++){
//         totPr += arr1[i].price
//         totWe += arr1[i].weight
//     }
//     return `the total price is ${totPr} and the total weight is ${totWe}`
// }

sumFunc = (arr1) => {
    return ` the total price is ${arr1.reduce((totPr,nums) => {return totPr += nums.price},0)} and the total weight is
    ${arr1.reduce((totWe,nums) => {return totWe += nums.weight},0)}`
}

console.log(sumFunc(cartItems));

// loop through array
//in each array index, get the price and the weight of the object
// return the sum of the prices and weights


//Exercise 11

var library = [
   {
       title:  'DThe Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'CWalter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'AMockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];


function sortinArray (arr1,i ,j){
    let temp =arr1[i]
    arr1[i] = arr1[j]
    arr1[j] = temp
}

function bubleSorting (arr1){
    for (let i = 0; i < arr1.length; i++) {

        for (let j = 1; j < arr1.length; j++) {
            if (arr1[j-1].title > arr1[j].title) {
                sortinArray(arr1,j-1,j)
            }
        }
    }
    return arr1
}

console.log(bubleSorting(library));
// check if charat type 0 is greater than the next type charat0
// function soringArray (arr1) {
//     let fLetter =arr1[0].title
//     let sLetter =arr1[1].title
//     for (let i = 0; i < arr1.length; i++) {
//         if (fLetter > sLetter) {
//             arr1[0] = arr1[i]
//             fLetter = arr1[0].title
//             sLetter =arr1[1].title
//         }
//     }
//     return arr1
// }

// if it is greater move index number
// console.log(library.sort(function (a,b) {
//     var nameA = a.title.toLowerCase
//     var nameB = b.title.toLowerCase
//     if (nameA < nameB) {
//         return -1
//     }
//     if (nameA > nameB) {
//         return 1
//     }
//     return 0
// }));
