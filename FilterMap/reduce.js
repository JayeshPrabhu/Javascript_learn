// reduce_examples_explained.js
// Deep, line-by-line comments and explanations for reduce() examples.
// Read this file in the canvas for the full annotated code and outputs.

// -----------------------------------------------------------
// Basic reduce on numbers
// -----------------------------------------------------------
// We start with a small array of numbers.
const myNums = [1, 2, 3];

// The reduce() method executes a reducer function (provided by you) on each
// element of the array, resulting in a single output value.
// The reducer function takes (accumulator, currentValue, currentIndex, array).
// The most commonly used forms use only the first two parameters: acc and curr.

// Verbose version using a normal function and console logging to see steps:
// const myTotal = myNums.reduce(function (acc, currval) {
//     // This logs the accumulator and current value at each step so you can trace.
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval; // important: always return the updated accumulator
// }, 0); // the '0' here is the initial value for the accumulator

// Expected logs for the verbose version with initial value 0:
// acc: 0 and currval: 1
// acc: 1 and currval: 2
// acc: 3 and currval: 3
// Final returned value: 6

// Concise arrow-function version (equivalent result):
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log('myTotal:', myTotal); // Output: myTotal: 6

// -----------------------------------------------------------
// Explanation of parameters and flow
// -----------------------------------------------------------
// - acc (accumulator): holds the running total (or any accumulated value) between iterations.
// - curr (current value): the current element in the array being processed.
// - initialValue (here 0): the starting value of the accumulator.
//   If you omit the initial value, the first array element becomes the initial
//   accumulator and reduce starts at the second element. This is sometimes
//   convenient but also can cause errors on empty arrays.

// Example: what happens without initial value
// [1,2,3].reduce((acc, curr) => acc + curr) -> acc starts as 1, curr starts as 2
// Steps: acc=1,curr=2 -> return 3; next acc=3,curr=3 -> return 6 -> final 6
// So result same as with initial 0 here, but behavior differs for empty arrays.

// If array is empty and no initial value provided -> TypeError is thrown.
// So it's generally safer to provide an initial value.

// -----------------------------------------------------------
// Using reduce() over an array of objects: shopping cart example
// -----------------------------------------------------------
const shoppingCart = [
  { itemName: "js course", price: 2999 },
  { itemName: "py course", price: 999 },
  { itemName: "mobile dev course", price: 5999 },
  { itemName: "data science course", price: 12999 },
];

// We want the total price to pay — reduce can sum the price field of each object.
// acc starts at 0 (we want to sum numbers), and for each item we add item.price.
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log('priceToPay:', priceToPay); // Output: priceToPay: 22996

// -----------------------------------------------------------
// Step-by-step trace for the shoppingCart reduce (with initial acc = 0):
// Step 1: acc=0, item.price=2999 -> return 2999
// Step 2: acc=2999, item.price=999 -> return 3998
// Step 3: acc=3998, item.price=5999 -> return 9997
// Step 4: acc=9997, item.price=12999 -> return 22996
// Final result returned: 22996

// -----------------------------------------------------------
// More use-cases & patterns for reduce()
// -----------------------------------------------------------
// 1) Counting occurrences (frequency map)
// Example: count how many times each number appears
const nums = [1,2,2,3,3,3];
const freq = nums.reduce((acc, n) => {
  // If key doesn't exist, initialize it to 0, then increment
  acc[n] = (acc[n] || 0) + 1;
  return acc;
}, {});
console.log('frequency map:', freq); // Output: { '1': 1, '2': 2, '3': 3 }

// 2) Transforming to a different shape (indexing by itemName)
const indexed = shoppingCart.reduce((acc, item) => {
  acc[item.itemName] = item.price; // create a dictionary mapping name -> price
  return acc;
}, {});
console.log('indexed by name:', indexed);
// Output example: { 'js course': 2999, 'py course': 999, ... }

// 3) Finding max/min using reduce
const maxPrice = shoppingCart.reduce((acc, item) => Math.max(acc, item.price), 0);
console.log('maxPrice:', maxPrice); // 12999

// 4) Flattening arrays
const arrays = [[1,2],[3,4],[5]];
const flattened = arrays.reduce((acc, arr) => acc.concat(arr), []);
console.log('flattened:', flattened); // [1,2,3,4,5]

// -----------------------------------------------------------
// Common gotchas and best practices
// -----------------------------------------------------------
// • Always return the accumulator from the reducer. If you forget to return,
//   acc becomes undefined in the next step (or you get unexpected results).
// • Provide an initialValue whenever possible (safer with empty arrays).
// • Reduce can be used to both compute simple values (sum, max) and to build
//   complex structures (objects, arrays). Keep reducer functions small and
//   readable — if they grow complex, break logic into helper functions.
// • Avoid side effects inside reducer: don't mutate external variables. The
//   reducer should be a pure function: input in -> output out.
// • For heavy transformations, consider readability vs performance. Reduce can
//   do many things in one pass which may be efficient, but overly clever
//   reducers can be hard to maintain.

// -----------------------------------------------------------
// Equivalent implementations (for clarity)
// -----------------------------------------------------------
// Sum of numbers using a for loop (equivalent to reduce result):
let s = 0;
for (let i = 0; i < myNums.length; i++) {
  s += myNums[i];
}
console.log('sum using for-loop:', s); // 6

// Sum of shoppingCart prices using map+reduce or map+forEach (less direct):
const prices = shoppingCart.map(i => i.price); // [2999, 999, 5999, 12999]
const totalFromMap = prices.reduce((a, b) => a + b, 0);
console.log('totalFromMap:', totalFromMap); // 22996

// -----------------------------------------------------------
// Final notes and recommendations
// -----------------------------------------------------------
// • Use reduce when you need to collapse an array to a single value.
// • For simple sums, reduce is concise and idiomatic in JS.
// • For complicated transformations, keep the reducer focused and consider
//   writing small helper functions to keep code readable.
// • Remember the initial value and return the accumulator every time.

// End of file
