// ===========================
// Example of `for...of` loop
// ===========================

const arr = [1, 2, 3, 4, 5];

// `for...of` is used to iterate over **iterable objects** like arrays, strings, maps, etc.
for (const num of arr) {
    // This will log each number in the array one by one
    console.log(num); 
}

// ===========================
// `for...of` with a string
// ===========================

const greetings = "Hello world!";

for (const greet of greetings) {
    // This will log each character of the string individually
    console.log(`Each char is ${greet}`);
}

// ===========================
// Using `Map` and `for...of`
// ===========================

// Creating a new Map object
const map = new Map();

// Adding key-value pairs to the map
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Duplicate key, will overwrite the previous value for 'IN'

// Logging the entire map
console.log(map);

// Using `for...of` to loop through the Map
for (const [key, value] of map) {
    // Destructuring each entry into key and value
    console.log(key, ':-', value);
    // Example output: IN :- India
    //                 USA :- United States of America
    //                 Fr :- France
}

// ===========================
// `for...of` with plain Object
// ===========================

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// The following code is commented out because `for...of` does NOT work on plain objects
// Plain objects are NOT iterable with `for...of`
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// To iterate over an object, use `for...in` or Object.entries()

// Correct way to iterate over object using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
    console.log(key, ':-', value);
    // Output: game1 :- NFS
    //         game2 :- Spiderman
}


/* 1. for...of:

Used to iterate over iterable objects: Arrays, Strings, Maps, Sets, etc.

Not usable directly on plain JavaScript Objects.

2. Map:

A collection of key-value pairs.

Maintains insertion order.

Keys can be any datatype (unlike objects which have string/symbol keys).

for...of works naturally on Maps, returning [key, value] pairs.

3. Plain Object {}:

Not directly iterable with for...of.

To loop through an object, you can use:

for...in → for keys.

Object.entries(obj) + for...of → for key-value pairs.

Let me know if you'd like a visual diagram or comparison table as well! */