/*
   JavaScript Functions Example
   Author: Jayesh
   Explanation: This file demonstrates various types of functions, 
   parameters, return values, default parameters, rest operator, 
   and handling objects and arrays in functions.
*/

// ✅ Function that prints letters of a name individually
function sayMyName() {
    console.log("H");  // Prints 'H'
    console.log("I");  // Prints 'I'
    console.log("T");  // Prints 'T'
    console.log("E");  // Prints 'E'
    console.log("S");  // Prints 'S'
    console.log("H");  // Prints 'H'
}

// Calling the function
// sayMyName()
// Output if called:
// H
// I
// T
// E
// S
// H



// ✅ Function that adds two numbers and prints result (without return)
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }


// ✅ Function that adds two numbers and returns result
function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2       // returns the sum of number1 and number2
}

// Calling the function and storing the result
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result)
// Output: Result: 8



// ✅ Function with default parameter and conditional check
function loginUserMessage(username = "sam") {
    if (!username) {                     // Checks if username is falsy (empty, null, undefined, etc.)
        console.log("Please enter a username")
        return                           // Stops execution if username is missing
    }
    return `${username} just logged in`  // Returns a formatted string with username
}

// Examples:
// console.log(loginUserMessage("jayesh"))
// Output: jayesh just logged in

// console.log(loginUserMessage())
// Output: sam just logged in (default value is used)



// ✅ Function using rest operator to capture multiple arguments
function calculateCartPrice(val1, val2, ...num1) {
    // val1 -> 1st argument
    // val2 -> 2nd argument
    // ...num1 -> array of remaining arguments
    return num1
}

// Example:
// console.log(calculateCartPrice(200, 400, 500, 2000))
// Output: [500, 2000] (all arguments after val2 captured in an array)



// ✅ Object example
const user = {
    username: "jayesh",
    prices: 199
}

// Function that accepts an object as argument
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    // Output uses template literals to dynamically insert object values
}

// Calling function with object variable
// handleObject(user)
// Output: Username is jayesh and price is undefined
// Note: 'price' was misspelled as 'prices' in object, so we access 'price' here -> undefined

// Calling function with object literal
handleObject({
    username: "sam",
    price: 399
})
// Output: Username is sam and price is 399



// ✅ Array example
const myNewArray = [200, 400, 100, 600]

// Function that returns the second value from an array
function returnSecondValue(getArray) {
    return getArray[1]       // Arrays are 0-indexed; 1 means second element
}

// Examples:
// console.log(returnSecondValue(myNewArray))
// Output: 400

console.log(returnSecondValue([200, 400, 500, 1000]))
// Output: 400
// Explanation: The function always returns the second element of any array passed to it

/*🧠 Deep Explanation in Simple Words

Function Basics

function name(params) { ... } defines a reusable block of code.

Can print (console.log) or return a value (return).

Return vs Console.log

console.log shows output in console immediately but doesn’t store it.

return sends value back to caller; can store in a variable.

Default Parameters

function f(x=5) → if argument not provided, x will be 5 automatically.

Rest Operator (...)

Collects all remaining arguments into an array.

Example: function f(a, b, ...others) → others is an array of extra values.

Objects as Arguments

Objects can be passed to functions.

Use object.key to access values dynamically.

Arrays and Indexing

Arrays are 0-indexed.

Access elements using array[0], array[1], etc.

Template Literals

Use backticks `Hello ${name}` to insert variables into strings easily.*/