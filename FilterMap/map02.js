// map_filter_chain_explained.js
// Deep, line-by-line comments and explanation for this code:

// Original array (note the variable name — it can be anything, but be consistent):
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// We will transform this array using map -> map -> filter chaining.
// Final code (concise):
// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 40)
// console.log(newNums);

// -----------------------------------------------------------
// 1) What `map()` does
// -----------------------------------------------------------
// - `map()` takes a callback function and applies it to every element in the
//   array, returning a NEW array with the transformed values.
// - It does NOT change (mutate) the original array (unless the callback does
//   something that explicitly mutates items — which is uncommon and not needed
//   here).
// - Example: arr.map(x => x * 2) will return a new array where each value is
//   doubled.

// In our chain, the first map: (num) => num * 10
// - multiplies every element by 10.
// - input:  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// - output: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// -----------------------------------------------------------
// 2) Chaining multiple `map()` calls
// -----------------------------------------------------------
// - The result of the first .map() is an array; calling .map() again runs the
//   second transform on every element of that intermediate array.
// - Here the second map: (num) => num + 1 adds 1 to each multiplied value.
// - input to second map:  [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// - output after second map: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

// Why chain maps instead of combining logic into one map?
// - Readability: often clearer to think of transformations as separate steps.
// - Reusability & debugging: you can inspect intermediate results easily.
// - Performance: two maps cost slightly more than one combined map (two passes
//   vs one pass), but for most JS apps the readability wins. If the array is
//   huge and performance-critical, combine transforms into a single map.

// -----------------------------------------------------------
// 3) filter()
// -----------------------------------------------------------
// - `filter()` also takes a callback. The callback returns a boolean (true/false).
// - For each element, if the callback returns true, that element is kept in the
//   returned array; otherwise it's skipped.
// - Importantly, filter receives the transformed values (the outputs of the
//   previous map calls) — it does not know about the original numbers.

// Our filter is: (num) => num >= 40
// - Input (from previous step): [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
// - Elements that satisfy >= 40 are: 41, 51, 61, 71, 81, 91, 101
// - So final output will be: [41, 51, 61, 71, 81, 91, 101]

// -----------------------------------------------------------
// 4) Full code with intermediate logging so you can see each step
// -----------------------------------------------------------
const step1 = myNumers.map((num) => num * 10); // multiply each by 10
console.log('after first map (num * 10):', step1);
// expected: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const step2 = step1.map((num) => num + 1); // add 1 to each value
console.log('after second map (num + 1):', step2);
// expected: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]

const step3 = step2.filter((num) => num >= 40); // keep only values >= 40
console.log('after filter (num >= 40):', step3);
// expected: [41, 51, 61, 71, 81, 91, 101]

// -----------------------------------------------------------
// 5) The same chain written as a concise one-liner (same as your original)
// -----------------------------------------------------------
const newNums = myNumers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log('newNums (one-liner):', newNums);
// expected same output: [41, 51, 61, 71, 81, 91, 101]

// -----------------------------------------------------------
// 6) Important details, gotchas and best practices (don't miss these):
// -----------------------------------------------------------
// - Immutability: map() and filter() return NEW arrays. The original array
//   `myNumers` remains unchanged.
//   You can verify by logging: console.log(myNumers);

// - Arrow function shorthand:
//   (num) => num * 10 is equivalent to (num) => { return num * 10; }
//   When you use curly braces { }, you must use an explicit return.
//   When you omit them, the expression after => is implicitly returned.

// - Parentheses in arrow functions:
//   For a single parameter you can omit parentheses: num => num * 10
//   For zero or multiple parameters you need parentheses: () => ..., (a, b) => ...

// - Chaining order matters:
//   If you filter before mapping, you may remove items earlier and reduce work.
//   Example: myNumers.filter(n => n >= 4).map(n => n*10) will first filter by
//   original numbers >= 4 and then multiply — the transformed results differ
//   from mapping first then filtering the transformed values.

// - Performance tip:
//   Each map and filter loop iterates over the array. So three chained calls
//   cause three array passes. For small arrays this is fine; for very large
//   data sets you might prefer a single reduce() to do everything in one pass.

// - Readability vs Performance:
//   Prefer clear and small functions. If profiling shows this is a hotspot,
//   then optimize (combine maps or use reduce). Premature optimization is
//   usually unnecessary.

// - Naming and typos:
//   Be consistent in variable names: `myNumers` is ok but `myNumbers` reads
//   clearer. Avoid accidental reassignments to const variables.

// - Side effects:
//   Try to avoid side effects inside map/filter callbacks (e.g., mutating
//   external variables). Pure functions are easier to reason about and test.

// -----------------------------------------------------------
// 7) Extra: Single-pass alternative using reduce (optional)
// -----------------------------------------------------------
// If you want to do the same operations in one pass (map -> map -> filter),
// you can use reduce to accumulate results and avoid creating intermediate
// arrays. This is useful for performance-critical code.

const reduced = myNumers.reduce((acc, num) => {
  const transformed = (num * 10) + 1; // both maps combined
  if (transformed >= 40) acc.push(transformed); // apply filter condition
  return acc;
}, []);

console.log('single-pass with reduce:', reduced);
// expected: [41, 51, 61, 71, 81, 91, 101]

// -----------------------------------------------------------
// 8) Final note: expected console output summary
// -----------------------------------------------------------
// after first map (num * 10): [10,20,30,40,50,60,70,80,90,100]
// after second map (num + 1): [11,21,31,41,51,61,71,81,91,101]
// after filter (num >= 40): [41,51,61,71,81,91,101]
// newNums (one-liner): [41,51,61,71,81,91,101]
// single-pass with reduce: [41,51,61,71,81,91,101]

// -----------------------------------------------------------
// End of file
// -----------------------------------------------------------
