// ---------------- Arrays ----------------

// Different ways to create arrays
const myArr = [0, 1, 2, 3, 4, 5];  // using literal syntax
const myHeroes = ["shaktiman", "naagraj"]; 
const myArr2 = new Array(1, 2, 3, 4); // using Array constructor

// console.log(myArr[1]); // Accessing element at index 1 → output: 1


// ---------------- Array Methods ----------------

// Add elements at the END
// myArr.push(6); // [0,1,2,3,4,5,6]
// myArr.push(7); // [0,1,2,3,4,5,6,7]

// Remove element from the END
// myArr.pop();   // removes last element

// Add element at the START
// myArr.unshift(9); // [9,0,1,2,3,4,5]

// Remove element from the START
// myArr.shift(); // removes first element

// Check if element exists
// console.log(myArr.includes(9)); // true/false

// Get index of element
// console.log(myArr.indexOf(3)); // 3

// Convert array to string
// const newArr = myArr.join(); 
// console.log(newArr); // "0,1,2,3,4,5"  (string, not array)


// ---------------- slice vs splice ----------------
console.log("A ", myArr); 
// Original array → [0,1,2,3,4,5]

// slice(startIndex, endIndex)
// -> Returns a copy of part of the array
// -> Does NOT change original array
const myn1 = myArr.slice(1, 3); 
console.log(myn1); // [1,2] (takes elements at index 1 and 2)
console.log("B ", myArr); // Original array is unchanged → [0,1,2,3,4,5]


// splice(startIndex, deleteCount)
// -> Changes the original array
// -> Can remove and/or add elements
const myn2 = myArr.splice(1, 3); 
console.log("C ", myArr); // Original array modified → [0,4,5]
console.log(myn2);        // Extracted portion → [1,2,3]
