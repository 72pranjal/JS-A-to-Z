// 1. Function declaretion =>
// a:  A function declared with function keyword is called fucnction declaretion.
// b:  They are hosited, we used before declration in the code

hello()
function hello() {
    console.log("hello")
}

// 2. Function expression
// a: A function assigned to a variable is called function expression;
// b: we can not use before declraetion;

const greet = function(name) {
    console.log(`Hello ${name}`)
}
greet('Pranjal') // o/p Hello Pranjal

// 3. Arrow function
// a: Arrow function are ways to write the function in shorter way, arrow function do have their own this, 
// it inherit from the other context;

const addTwoNumber = (a,b) => {
    return a+b
}
addTwoNumber(4,5)

// 4. Anonymous Function
// a: A function declared withou name is called anonymous function.
// b: these are often used for as argument in other function or in callback;

setTimeout(function() {
    console.log("This is an anonymous function.");
}, 1000);

// 5. Async Function
// Introduced in ES8, these are functions that work asynchronously with async and await syntax for handling Promises.


// 6. Constructor Function
// A function used to create objects, typically called with the new keyword.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const alice = new Person("Alice", 25);
console.log(alice); // Output: Person { name: "Alice", age: 25 }


// 7. Callback function
//  A function passed in another function as a argument and executed later is called callback function.

function processData(data, callback) {
    console.log(data.toUpperCase())
    callback();
}
function get() {
    console.log("helloo")
}
processData("Pranjal", get)


// 8. Higer-order function 
//  A function that take one or more function as a argument or return a function as result is called higher-order function.

function higherOrder(func) {
    return function(x) {
        return func(x) * 2;
    };
}

const multiplyBy2 = higherOrder(function(x) {
    return x * 3;
});

console.log(multiplyBy2(5)); // Output: 30


