// ----------------------------
// IIFE: Immediately Invoked Function Expression
// ----------------------------

// This is a named IIFE
(function chai(){
    // The function is declared and immediately executed
    console.log(`DB CONNECTED`);
})();

// Output: "DB CONNECTED"

// ----------------------------
// Arrow function IIFE with parameter
// ----------------------------

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

// Output: "DB CONNECTED TWO hitesh"

// ----------------------------
// Explanation of IIFE
// ----------------------------

/*

1️⃣ What is an IIFE?

IIFE stands for Immediately Invoked Function Expression. 
It is a JavaScript function that runs **as soon as it is defined**.

Structure:

- Normal function: 
    function foo() { ... }   // declared but not executed
- IIFE: 
    (function foo(){ ... })();  // declared and executed immediately

- Arrow function IIFE:
    ( () => { ... } )();

The parentheses around the function `(function(){})` or `(() => {})` are **important**.
They tell JavaScript to treat it as an **expression** instead of a declaration.

---

2️⃣ Why use IIFE?

a) **Avoid polluting global scope**
   - Variables declared inside an IIFE are **private** and cannot be accessed from outside.
   ```javascript
   (function(){
       let secret = "hidden";
       console.log(secret);
   })();
   console.log(secret); // Error! secret is not defined globally */

/*
IIFEs (Immediately Invoked Function Expressions) are special functions that run as soon as they are defined, creating a private scope for variables and functions inside them. While normal functions also have their own scope, IIFEs are useful because they **execute immediately** without needing to be called later, making them ideal for initialization tasks like connecting to a database. They also help **avoid polluting the global scope**, especially in older JavaScript where `var` could accidentally create global variables, and allow encapsulation of private variables that cannot be accessed from outside. Essentially, IIFEs combine **immediate execution, scope isolation, and data privacy** in one simple construct.*/

