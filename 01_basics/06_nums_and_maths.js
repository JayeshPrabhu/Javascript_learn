// ---------------------- Numbers ----------------------

// Primitive number
const score = 400; 

// Number object (rarely used)
const balance = new Number(100); 

// Convert number to string and get length
console.log(balance.toString().length); // 3

// Format number with fixed decimals
console.log(balance.toFixed(1)); // "100.0"

// Number with significant digits
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // "123.9"

// Format number with commas (locale-specific)
const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // "10,00,000" (Indian system)

// ---------------------- Math Object ----------------------

// Built-in object for mathematical operations
console.log(Math.abs(-4));      // 4      -> absolute value
console.log(Math.round(4.6));   // 5      -> nearest integer
console.log(Math.ceil(4.2));    // 5      -> round up
console.log(Math.floor(4.9));   // 4      -> round down
console.log(Math.min(4,3,6,8)); // 3      -> smallest
console.log(Math.max(4,3,6,8)); // 8      -> largest

// ---------------------- Random Numbers ----------------------

// Random float between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Random float between 1 and 11
console.log((Math.random() * 10) + 1);

// Random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Random integer between min and max
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
// Explanation:
// 1. Math.random() → [0,1)
// 2. * (max-min+1) → [0, max-min+1)
// 3. Math.floor() → [0, max-min] integer
// 4. + min → [min, max] integer
