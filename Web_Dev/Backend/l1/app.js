// let a=10;
// let b=20;
// console.log(a+b);

// function statement
function greet(){
    console.log("greet.");
}
greet();

//function are first class
function logGreeting(fn){
    fn();
}
logGreeting(greet);

// function expression
const greet2 = function(){
    console.log("greet2.");
}
greet2();