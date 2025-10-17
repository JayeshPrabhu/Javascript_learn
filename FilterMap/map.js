// -----------------------------------------------------------
// Example 1: forEach() vs filter()
// -----------------------------------------------------------

// Let's start with a simple array of strings
// Each element here is a programming language
const coding = ["js", "ruby", "java", "python", "cpp"];

// The forEach() method executes a provided function once for each array element.
// But IMPORTANT: it does NOT return anything (undefined).
// Even if you write "return item", it won't collect or create a new array.

const values = coding.forEach((item) => {
    // This line will execute for each element, printing it.
    console.log(item); // Output: js ruby java python cpp
    // Even though we return item, forEach() ignores the returned values.
    return item;
});

// So, the value of 'values' will be undefined because forEach doesn't return anything.
console.log(values); // Output: undefined

// -----------------------------------------------------------
// Example 2: filter() method
// -----------------------------------------------------------

// Let's take another array of numbers.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The filter() method creates a **new array** that contains only those elements
// that satisfy (return true for) the given condition.

// Here, we are filtering numbers greater than 4.
const newNums = myNums.filter((num) => {
    // Each number is checked — if num > 4, it’s kept in the new array.
    return num > 4;
});

console.log(newNums); 
// Output: [5, 6, 7, 8, 9, 10]

// -----------------------------------------------------------
// Same output using forEach()
// -----------------------------------------------------------

// The forEach() method can also be used to achieve similar filtering manually,
// but it doesn't return a new array automatically — we must push values manually.

const manualFilter = []; // create empty array

myNums.forEach((num) => {
    if (num > 4) { // check condition manually
        manualFilter.push(num); // manually push values that pass
    }
});

console.log(manualFilter); 
// Output: [5, 6, 7, 8, 9, 10]
// ✅ Both ways give the same result, but filter() is cleaner.

// -----------------------------------------------------------
// Example 3: Real-world filter example with an array of objects
// -----------------------------------------------------------

// Array of book objects — each has a title, genre, publish year, and edition year
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// -----------------------------------------------------------
// Filter only books that are of genre 'History'
// -----------------------------------------------------------

let userBooks = books.filter((bk) => bk.genre === 'History');

console.log(userBooks);
/*
Output:
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }
]
*/

// -----------------------------------------------------------
// Now let's add another condition
// Filter books published after 1995 AND are of genre 'History'
// -----------------------------------------------------------

userBooks = books.filter((bk) => {
    // Inside this function, each book object (bk) is checked.
    // We return true only for books that meet both conditions:
    // 1️⃣ publish year >= 1995
    // 2️⃣ genre is "History"
    return bk.publish >= 1995 && bk.genre === "History";
});

console.log(userBooks);
/*
Output:
[
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }
]
Explanation:
- "Book Three" matches because publish = 1999 (>=1995) and genre = "History".
- "Book Seven" is removed because publish = 1986 (<1995).
*/

// -----------------------------------------------------------
// ✅ Summary of concepts:
// -----------------------------------------------------------

// ➤ forEach()
// - Used to iterate over each element.
// - Does NOT return a new array.
// - Useful when you just want to perform an action (like console.log or push).

// ➤ filter()
// - Used to filter data based on a condition.
// - Returns a new array with only elements that match the condition.
// - Very useful for data processing and searching in arrays.

// -----------------------------------------------------------
// End of file
// -----------------------------------------------------------
