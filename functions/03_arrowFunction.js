// Object with properties and a method
const user = {
    username: "hitesh",
    price: 999,

    // Regular function inside object
    welcomeMessage: function() {
        // `this` refers to the object that called this function (here: `user`)
        console.log(`${this.username} , welcome to website`); // prints username
        console.log(this); // prints the whole user object
    }
}

// Calling the method
user.welcomeMessage(); 
// Output:
// "hitesh , welcome to website"
// { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }

// Changing the username property
user.username = "sam";

// Calling again to see the updated value
user.welcomeMessage();
// Output:
// "sam , welcome to website"
// { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

// Logging `this` in global context
console.log(this);
// In browsers: `window` object
// In Node.js: an empty object `{}` or global object depending on module system

// Regular function in global scope
function chai() {
    let username = "hitesh";
    // `this` inside regular functions depends on how function is called
    console.log(this.username); 
    // In strict mode: undefined (no global username)
    // Non-strict: may refer to global/window.username
}

chai(); // Call the function

// Function expression (regular function)
const chaiFunc = function () {
    let username = "hitesh";
    console.log(this.username);
}

// Arrow function
const chaiArrow = () => {
    let username = "hitesh";
    // Arrow functions do NOT have their own `this`
    // They take `this` from the surrounding lexical scope
    console.log(this);
}

chaiArrow(); 
// Output: global object in Node.js or window in browsers

// Arrow function examples with return values

// Traditional arrow function with block and return
const addTwo1 = (num1, num2) => {
    return num1 + num2;
}

// Shorter arrow function (implicit return)
const addTwo2 = (num1, num2) => num1 + num2;

// Another style using parentheses
const addTwo3 = (num1, num2) => (num1 + num2);

// Returning an object directly
const addTwo4 = (num1, num2) => ({username: "hitesh"});
// Important: parentheses `()` are needed to return an object directly
// Without parentheses, JS thinks `{}` is a block, not an object

console.log(addTwo4(3, 4)); 
// Output: { username: 'hitesh' }

// Array example
const myArray = [2, 5, 3, 7, 8];

// Using forEach to iterate over array
myArray.forEach((num) => {
    console.log(num);
});
// Output: 2 5 3 7 8 (each number on a new line)


/* 
🔹 Key Takeaways:

this in JS

Object method (user.welcomeMessage) → this points to the object.

Regular function (chai) → this depends on call; in strict mode, it's undefined.

Arrow function (chaiArrow) → this is lexical, i.e., inherited from where it was defined.

Arrow functions vs regular functions

Arrow functions cannot be used as object methods if you need this to refer to the object.

Regular functions have their own this depending on how they are called.

Returning objects in arrow functions

Wrap object in parentheses ({ key: value }) to avoid confusion with block {}.

Array iteration

forEach is an easy way to loop through arrays without a traditional for loop. */