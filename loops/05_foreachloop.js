// =======================================
// forEach() with Simple Array
// =======================================

// An array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];


// ------------------------------
// Example 1: Using anonymous function
// ------------------------------
// This will iterate through each element in the array
coding.forEach(function (val) {
    console.log(val);  
    // Output:
    // js
    // ruby
    // java
    // python
    // cpp
});


// ------------------------------
// Example 2: Using arrow function
// ------------------------------
// Using ES6 arrow syntax for cleaner function declaration
coding.forEach((item) => {
    console.log(item);  
    // Output:
    // js
    // ruby
    // java
    // python
    // cpp
});


// ------------------------------
// Example 3: Passing a named function
// ------------------------------
// Define a reusable function
function printMe(item) {
    console.log(item);
    // Output:
    // js
    // ruby
    // java
    // python
    // cpp
}

// Pass the function reference — do NOT call it (no `()`)
coding.forEach(printMe);


// ------------------------------
// Example 4: Using all parameters in forEach callback
// ------------------------------
// forEach has access to three parameters:
// 1. item: the current element
// 2. index: index of the current element
// 3. array: the full array being looped
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
    // Output:
    // js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
    // cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
});


// =======================================
// forEach() with Array of Objects
// =======================================

// This array contains objects with two properties
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
];

// Looping through array of objects using forEach
myCoding.forEach((item) => {
    // item here is each object in the array
    console.log(item.languageName);
    // Output:
    // javascript
    // java
    // python
});



/*
======================================
🔍 In-Depth Explanation
======================================

✅ What is forEach()?

- forEach() is a higher-order function available on arrays.
- It executes a callback function once for each array element.
- It does not return anything (returns undefined).
- It is commonly used for side effects like logging or updating the DOM.

🧠 Parameters of forEach():

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| item      | The current element being processed         |
| index     | (Optional) The index of the current element |
| array     | (Optional) The original array itself        |


🧱 When to Use forEach():

Use it when:
- You want to iterate over an array and perform an action for each item.
- You do NOT need to return a new array.
- You don’t need to break the loop early.

Avoid forEach if:
- You want to transform the array → Use .map()
- You want to filter data → Use .filter()
- You want to break/exit early → Use for, for...of, or while

*/
