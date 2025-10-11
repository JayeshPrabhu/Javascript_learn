const userEmail = []                   // ✅ Empty array assigned to userEmail

if (userEmail) {                       // ✅ [] is a truthy value in JS (even if it's empty)
    console.log("Got user email");     // ✅ This runs → Output: "Got user email"
} else {
    console.log("Don't have user email");
}
// 🧠 In JS, only 6 values are falsy: false, 0, -0, 0n (BigInt), "", null, undefined, NaN
// Everything else (like [], {}, "0", "false") is considered truthy.


// List of falsy values (for reference)
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// List of truthy values (for reference)
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }
// 🧠 This is how you *actually* check if an array is empty.
// In this case, it’s true because userEmail.length = 0.

const emptyObj = {}                    // ✅ Declared an empty object

if (Object.keys(emptyObj).length === 0) {  
    // Object.keys(emptyObj) → returns an array of all keys → []
    // [].length === 0 → true
    console.log("Object is empty");    // ✅ Output: "Object is empty"
}


 // 🧠 Nullish Coalescing Operator (??)
 // Used to handle `null` or `undefined` safely.
 // It returns the first value that is NOT null or undefined.

let val1;

// val1 = 5 ?? 10           // ✅ Output: 5 (since 5 is not null or undefined)
// val1 = null ?? 10        // ✅ Output: 10 (since null is ignored)
// val1 = undefined ?? 15   // ✅ Output: 15 (since undefined is ignored)
val1 = null ?? 10 ?? 20    // ✅ Output: 10 (first non-null/undefined value is 10)

console.log(val1);          // ✅ Output: 10


// 🧠 Ternary Operator (short form of if-else)
// condition ? value_if_true : value_if_false

const iceTeaPrice = 100

iceTeaPrice <= 80 
  ? console.log("less than 80")        // ❌ Not executed (100 <= 80 is false)
  : console.log("more than 80");       // ✅ Executed → Output: "more than 80"
