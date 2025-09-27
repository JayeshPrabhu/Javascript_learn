// ---------------- Primitive Data Types ----------------
// These are stored directly in memory (stack) and are immutable
// They are "call by value" (copied when assigned)

// 1. String
const name = "Jayesh"; // Text data inside quotes
console.log(typeof name); // string

// 2. Number
const score = 100; // Integer
const scoreValue = 100.3; // Floating point
console.log(typeof scoreValue); // number

// 3. Boolean
const isLoggedIn = false; // true or false
console.log(typeof isLoggedIn); // boolean

// 4. null
const outsideTemp = null; // Intentional absence of any value
console.log(typeof outsideTemp); // object (quirk in JS!)

// 5. undefined
let userEmail; // Declared but not assigned
console.log(typeof userEmail); // undefined

// 6. Symbol
const id = Symbol("123"); // Unique identifier
const anotherId = Symbol("123"); // Even with same description, unique
console.log(id === anotherId); // false

// 7. BigInt
const bigNumber = 987654321987654321987654321n; // Large integer beyond safe limit
console.log(typeof bigNumber); // bigint



// ---------------- Reference (Non-Primitive) Data Types ----------------
// Stored in heap memory, variables hold a reference (address).
// They are "call by reference"

// 1. Array
const heros = ["jayesh", "nagraj", "doga"]; 
console.log(typeof heros); // object

// 2. Object
let myObj = {
  name: "Jayesh",
  age: 22
};
console.log(typeof myObj); // object

// 3. Function
const myFunction = function () {
  console.log("Hello from function!");
};
console.log(typeof myFunction); // function (but technically it's an object)

myFunction(); // calling the function
