console.log("Marco Polo");
// declare a function called marco
// takes no args
function marco(){
//returns "polo"
    return "polo"
}
//call and log marco
console.log(marco());
//

console.log("Greetings Name");
//declare a func called gretting
//takes arg name
function greeting(name){
    return "Welcome " + name
}
//returns string "welcome" plus name
console.log(greeting("John"))

console.log("Odd or Even");
// create varible to test function
var num1 = 14
var num2 = 55
var num3 = 64
//creat if else statement to determine odd/even
//declare function called oddOrEven
//takes one arg of a number
function oddOrEven(number){
    if(number%2===0){
        //returns if number is odd or even
        return "Even"
    } else {
        return "Odd"
    }
}
//call oddOrEven and log
console.log(oddOrEven(num1));
console.log(oddOrEven(num2));
console.log(oddOrEven(num3));

console.log("Triple");
//create func called triple
//takes one arg as number
function triple(number){
    //returns number multiplied by three
    return number * 3
}
console.log(triple(7))

console.log("Multiply");
//declare a function called Multiply
//takes two numbers as args
function multiply(numb1,numb2){
    //returns result of args multiplied together
    return numb1 * numb2
}
//return function and console.log();
console.log(multiply(2,5));

console.log("Divisible By");
//declare func called divisibleBy
//takes two numbers as args
function divisibleBy(nu1,nu2){
    //create if/else to determine if there is a remainder when divinding nu1 by nu2
    if(nu1%nu2===0){
        //return whether first num is evenly divisible by the second
        return nu1 + " is evenly divisble by " + nu2
    } else {
        return "error"
    }
}
//use arguments 10 and 5
console.log(divisibleBy(10,5));
// return message should read "10 is evenly divisible by 5"
console.log("What number's bigger");
//Create array to test
var arr1=8
var arr2=67
//write a function named greaterNum
//function takes two arguments, both numbers
function greaterNum(number1,number2){
    //write if statement
    if(number1>number2) {
        //return whichever number is greater
        return number1
    } else {
        return number2
    }
}
console.log(greaterNum(arr1,arr2));
//test function with different number pairs

console.log("World Translator");
//creat var to test
var lang1 = "es"
var lang2 = "de"
var lang3 = "ro"
var lang4 = "en"
//declare func called helloWorld
//takes one arg
function helloWorld(lang){
    //has three returns of "Hello World" in different languages
    if(lang==="es"){
        return "Hola Mundo!"
    } else if (lang==="de"){
        return "Hallo Welt!"
    } else if(lang==="ro"){
        return "Salut Lume!"
    } else{
        return "Hello World!"
    }
}
//log and test
console.log(helloWorld(lang1));
console.log(helloWorld(lang2));
console.log(helloWorld(lang3));
console.log(helloWorld(lang4));


console.log("The Grade Assigner");
//declare function named assignGrade
//takes one arg as a number score
function assignGrade(numScore){
    //create if else for letter grades A - F
    if(numScore >= 90 && numScore <= 100){
        return "A"
    } else if(numScore >= 80 && numScore <= 90){
        return "B"
    } else if(numScore >= 70 && numScore <= 80){
        return "C"
    } else if(numScore >= 60 && numScore <= 70){
        return "D"
    } else {
        return "F"
    }
}
//log and test
console.log(assignGrade(78));


console.log("The Pluralizer");
//declare func called pluralize
//takes two arguments as words
function pluralize(numm,noun){
    //return words in purlal form
    if(numm<=1){
        return numm + " "+ noun
    } else {
        return numm + " "+ noun + "s"
    }
}
console.log(pluralize(5,"bag"));
//if else for words not ending in "s"
//declare func called pluralize
//takes two arguments as words
function pluralize(numm,noun){
    //return words in purlal form
    if(numm<=1){
        return numm + " "+ noun
    } else if(numm>=2 && noun.endsWith("y")){
        return numm + " "+ noun.replace("y","ies")
    } else if(numm>=2 && noun==="sheep"){
        return numm + " " + noun
    } else if(numm>=2 && noun==="goose"){
        return numm + " " + "geese"
    } else if(numm>=2){
        return numm + " " + noun + "s"
    }
}
console.log(pluralize(3,"goose"));
