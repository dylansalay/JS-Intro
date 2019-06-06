//declare a function multiply3
//takes in an an array
var arr1 = [3, 9, 15, 4, 10]
// expected output -> [9, 27, 45, 12, 30]
//returns a new array with all numbers multipled by 3
function mult3(arr){
    var newArray = []
    for(let i=0;i<arr.length;i++){
        newArray.push(arr[i] * 3)
    }
    return newArray
}
console.log(mult3(arr1));
var arr2 = [2, 7, 3, 5, 8, 10, 13]
// expected output = [7, 3, 5, 13]
//declare func called onlyOdd
//function takes in an array
function onlyOdd(arr){
    //declare new var within function of empty array
    var newArray = []
    //create a loop for argument array
    for(let i=0;i<arr.length;i++){
        //if else to find odd numbers in array
        if(arr[i]%2!==0){
            newArray.push(arr[i])
        }
    }
    //returns NEW array w only odd numbers
    return newArray
}
console.log(onlyOdd(arr2));

//declare a function that allCaps
//function takes in a string
function allCaps(word){
    return word.toUpperCase()
}
//function returns new string all caps
console.log(allCaps("dog"));

//create a test array
var combo_arr = [7, "n", "i", "c", 10, "e", "w", 3, "o", "r", "k"]
//declare func onlyLetters
function onlyLetters(arr){
    var newArray = []
    //create a loop for array
        for(i=0;i<arr.length;i++){
            //if else using typeOf to search for letters
            if(typeof arr[i]=== "string"){
                newArray.push(arr[i])
            }
        }
        //return new array with only letters
    return newArray
}
console.log(onlyLetters(combo_arr));


//declare a function highNum
var highestNumber = [1,4,2]
function highNum(arr){
    var max = arr[0]
    //create a loop
    for(i=0;i<arr.length;i++){
        //create if
        if(max<arr[i]){
            max = arr[i]
        }
    }
    return max
}
console.log(highNum(highestNumber));

var lowNumber = [1,4,2]
//declare func called lowestNum
function lowestNum(arr){
    var min = arr[0]
    for(i=0;i<arr.length;i++){
        if(min>arr[i]){
            min = arr[i]
        }
    }
    return min
}
console.log(lowestNum(lowNumber));
//create var min
//create loop
//create if
console.log("Sum numbers function ");
var numbers = [1,2,7,5]
// sum = (arr1) => {
//     var accumelator =0
//     for(let i=0;i<arr1.length;i++){
//         accumelator += arr1[i]
//     }
//     return accumelator
// }

sum = (arr1) => {
    return arr1.reduce((acc,nums) => {return acc += nums
    })
}
console.log(sum(numbers));

function meanVal (arg1) {
    var avg =0
    for(let i=0;i<arg1.length;i++){
        avg += arg1[i] / arg1.length
    }
    return avg
}
console.log(meanVal(numbers));
console.log("mean value higher order");
meanValue =(arg1) => {
    return arg1.reduce((avg,nums) => {return avg += nums / arg1.length},0)
}

console.log(meanValue(numbers));


console.log("find highest number");
//
// function highNum (arg1) {
//     var high = arg1[0]
//     for(let i=0;i<arg1.length;i++){
//         if(arg1[i] > high){
//             high = arg1[i]
//         }
//     }
//     return high
// }
// console.log(highNum(numbers));

function highNum (arg1) {
    return arg1.reduce((max,nums) => {return nums > max ? nums:max})
}

console.log(highNum(numbers));


var arr1 = [3,9,15,4,10]
//
// function multThree (arg1) {
//     var newArray = []
//     for(let i=0; i<arg1.length; i++){
//         newArray[i] = arg1[i] * 3
//     }
//     return newArray
// }
// console.log(multThree(arr1));
//
multThree = (arg1) => {
    return arg1.map((nums) => {return nums*3})
}

console.log(multThree(arr1));
