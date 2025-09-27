// ===== Array Operations in JavaScript =====

// Two arrays of heroes
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// ======================= 1. push() =======================
// If we push an array into another, the entire array is inserted as ONE element.
marvel_heros.push(dc_heros)
// marvel_heros becomes: ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]
// Accessing nested: marvel_heros[3][1] → "flash"

// ======================= 2. concat() =======================
// concat() merges arrays into a new one (does NOT change original arrays).
const allHeros = marvel_heros.concat(dc_heros)
// allHeros → ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]

// ======================= 3. Spread Operator =======================
// Spread operator (...) spreads values, cleaner than concat().
const all_new_heros = [...marvel_heros, ...dc_heros]
// all_new_heros → ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"], "superman", "flash", "batman"]

// ======================= 4. flat() =======================
// Used to flatten nested arrays.
// Infinity → flattens to the deepest level.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// real_another_array → [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// ======================= 5. Array.isArray() =======================
// Checks if given value is an array.
console.log(Array.isArray("Hitesh")) // false (string)
console.log(Array.isArray([1, 2, 3])) // true

// ======================= 6. Array.from() =======================
// Converts iterable (like string) or object to array.
console.log(Array.from("Hitesh")) // ['H','i','t','e','s','h']
console.log(Array.from({name: "hitesh"})) 
// [] → because it doesn’t know how to convert object directly (needs mapping)

// ======================= 7. Array.of() =======================
// Creates array from arguments (not like Array() constructor).
let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3)) 
// [100, 200, 300]
