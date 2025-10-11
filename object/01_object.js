// ✅ Singleton pattern example (though object literals are not true singletons)
// A singleton means only one instance of an object exists in the program.
// Here we just create one object using object literal — not a real singleton class.

// ✅ Object literal syntax
// This is the easiest way to create an object in JavaScript — just use { key: value }.

const mySym = Symbol("key1");   // A Symbol is a unique and hidden key — even if another Symbol has the same description, it's different.
const mySym1 = Symbol("key");   // Another unique Symbol

// ✅ Creating an object using object literal
const JsUser = {
    name: "Jayesh",                   // Normal property (key-value pair)
    "Fullname": "Jayesh Prabu",       // Key in quotes (used when space or special chars are in key)
    age: 18,                          // Number property
    [mySym]: "myKey1",                // Computed property (using Symbol as a key)
    [mySym1]: "myke",                 // Another computed Symbol key
    location: "Jaipur",               // String property
    email: "jayesh@gmail.com",        // String property
    isLogined: false,                 // Boolean property
    lastlogin: ["monday", "saturday"] // Array property
};

// ✅ Accessing object properties
console.log(JsUser.email);         // Dot notation → "jayesh@gmail.com"
console.log(JsUser["email"]);      // Bracket notation → same result ("jayesh@gmail.com")
console.log(JsUser.Fullname);      // Accessing property with quotes → "Jayesh Prabu"

// ✅ Checking type of Symbol and normal properties
console.log(typeof JsUser.mySym);      // ❌ undefined → wrong way (Symbol key must be accessed with brackets)
console.log(typeof JsUser[mySym]);     // ✅ string → correct way to access Symbol key
console.log(typeof JsUser[mySym1]);    // ✅ string → another Symbol key access

// ✅ Changing property value
JsUser.email = "hitesh@chatgpt.com";   // Email value updated
// Object.freeze(JsUser);              // Freezes the object (no add, delete, or modify possible if this line is active)
JsUser.email = "hitesh@microsoft.com"; // This change works because freeze is commented out

// ✅ Adding methods (functions) inside the object
JsUser.greeting = function() {
    console.log("Hello JS user");       // Simple message when called
}

// ✅ Another method using 'this' keyword
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);  // 'this' refers to JsUser, so it prints the name property
}

// ✅ Calling both methods
console.log(JsUser.greeting());         // Executes greeting() → prints "Hello JS user" and returns undefined
console.log(JsUser.greetingTwo());      // Executes greetingTwo() → prints "Hello JS user, Jayesh" and returns undefined

/*
📘 Easy Explanation Summary:

1️⃣ **Object Creation**
   - Created using object literal `{}`.
   - Contains keys (like `name`, `age`, `email`) and values.

2️⃣ **Symbols**
   - Used as unique keys inside objects.
   - Accessed using `[mySymbol]` not `.mySymbol`.

3️⃣ **Accessing Values**
   - Dot notation: `obj.key`
   - Bracket notation: `obj["key"]` or `obj[variable]`

4️⃣ **Modifying Values**
   - Directly change values: `obj.key = newValue`
   - To lock the object, use `Object.freeze(obj)`.

5️⃣ **Adding Functions (Methods)**
   - You can add functions inside objects as methods.
   - `this` keyword points to the same object, so you can access its properties.

6️⃣ **Output**
   - Hello JS user
   - Hello JS user, Jayesh
*/
