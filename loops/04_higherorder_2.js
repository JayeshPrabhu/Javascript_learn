// ==================================
// `for...in` with an Object
// ==================================

// Creating an object with key-value pairs
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// `for...in` is used to iterate over the **keys** of an object
for (const key in myObject) {
    // Inside the loop, `key` will be each property name (js, cpp, etc.)
    // `myObject[key]` gives the corresponding value
    console.log(`${key} shortcut is for ${myObject[key]}`);
    // Output:
    // js shortcut is for javascript
    // cpp shortcut is for C++
    // rb shortcut is for ruby
    // swift shortcut is for swift by apple
}

// ==================================
// `for...in` with an Array
// ==================================

// Creating an array of programming language shortcuts
const programming = ["js", "rb", "py", "java", "cpp"]

// `for...in` can be used on arrays, but it's not recommended for arrays
// because it iterates over the **index numbers**, not the actual elements
for (const key in programming) {
    // key here is the index (0, 1, 2, ...)
    // programming[key] gets the actual value at that index
    console.log(programming[key]);
    // Output:
    // js
    // rb
    // py
    // java
    // cpp
}

// ==================================
// `for...in` with a Map (⚠️ DOESN’T WORK)
// ==================================

// Creating a new Map object
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // Duplicate key; value will be overwritten

// ❌ `for...in` does NOT work with Map objects
// Maps are not enumerable like plain objects or arrays
for (const key in map) {
    console.log(key); // This will not log anything
    // Output: (nothing, or might skip silently)
}

// ✅ Correct way to iterate over a Map is using `for...of` with destructuring:
for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
    // Output:
    // IN :- India
    // USA :- United States of America
    // Fr :- France
}


/*
====================================
✅ Summary of Key Differences:
====================================

| Loop Type  | Best Used For               | Iterates Over       | Notes                                                                                 |
| ---------- | --------------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| `for...in` | Objects, Arrays (not Maps)  | **Keys or Indexes** | For objects, gives keys. For arrays, gives index (string). Not suitable for Maps.     |
| `for...of` | Arrays, Strings, Maps, Sets | **Values**          | Requires iterable objects. Use `Object.entries(obj)` to loop objects with `for...of`. |
| Map        | Use `for...of [key, value]` | Key-value pairs     | `for...in` doesn't work on Map objects.                                               |
*/
