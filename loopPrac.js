console.log("1-20")
for(let i=1; i<=20; i++){
    console.log(i)
}

console.log("1-20 tripled");
for(let i=1; i<=20; i++){
    console.log(i*3);
}


console.log("multiples of 4");
var numbers = [8, 2, 17, 4, 5, 10, 4, 8, 9, 15]
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]*4);
}

console.log("Even and Odd");
for(let i=1; i<=20; i++){
    if(i%2===0){
        console.log(i);
    } else {
        console.log("Odd");
    }
}

console.log("Reverse");
for(let i=10; i>=1; i--){
    console.log(i);
}

console.log("Capitalize");
var letters = ["l", "e", "a", "r", "n"]
for(let i=0;i<letters.length;i++) {
    console.log(letters[i].toUpperCase());
}

console.log("Strings");
// var strings = ["hi", "yo", "there", "what", "how", "two", "are", "where", "you"]
// for(let i=0; i<strings.length; i+=2){
//     console.log(strings[i]);
// }

// Consider this variable: var strings = ["hi", "yo", "there", "what", "how", "two", "are", "where", "you"]. Write a for loop that logs the strings at only the even indexes(start with 0).
var strings = ["hi", "yo", "there", "what", "how", "two", "are", "where", "you"]
for(let i=0;i<strings.length;i++){
    var rank = i + 2; {
        if(rank%2===0){
            console.log(strings[i]);
        }
    }
}

console.log("Odd and Even #2");
for(let i=0; i<=15;i++){
    if(i%2===0){
        console.log(i+ " is even");
    } else {
        console.log(i +" is odd");
    }
}


// Use a for loop to log all numbers from 1-100. If a number is a multiple of 3, replace it with the word 'fizz'. If a number is a multiple of five, replace it with the word 'buzz'. If a number is a multiple of both 3 and 5, replace it with 'fizzbuzz'.
console.log("Fizz Buzz");
for(let i=1; i<=100; i++){
    if(i%3===0){
        console.log("fizz");
    } else if(i%5===0){
        console.log("buzz");
    } else if(i%3===0 && i%5===0){
        console.log("fizzbuzz");
    } else{
        console.log(i);
    }
}
