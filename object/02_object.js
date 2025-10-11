// All "hitesh" replaced with "jayesh" below.
// Detailed comments show what each line does and the expected output.

// Create an empty object (object literal)
const tinderUser = {}                              // {} (an empty object)

// Add properties to the object
tinderUser.id = "123abc"                           // adds property id -> "123abc"
tinderUser.name = "Sammy"                          // adds property name -> "Sammy"
tinderUser.isLoggedIn = false                      // adds property isLoggedIn -> false

console.log(tinderUser)
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }
// Explanation: console.log prints the full object with its current properties.



// Nested object example
const regularUser = {
    email: "some@gmail.com",
    fullname: {                       // fullname is an object
        userfullname: {               // userfullname is nested inside fullname
            firstname: "jayesh",      // changed from "hitesh" to "jayesh"
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
// Output: jayesh
// Explanation: dot notation goes level by level: regularUser -> fullname -> userfullname -> firstname



// Small objects with numeric keys
const obj1 = {1: "a", 2: "b"}     // numeric keys are actually strings internally: "1","2"
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merge objects using spread operator (creates a new object)
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3)
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// Explanation: spread (...) copies entries from each object into a new object.
// If the same key appears in later objects, it will overwrite the earlier key.



// Array of user objects
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "s@gmail.com" },
    { id: 3, email: "p@gmail.com" }
]

console.log(users[1].email)
// Output: s@gmail.com
// Explanation: arrays are 0-indexed, so users[1] is the second object in the array.



// Re-print tinderUser to show it still holds the properties added earlier
console.log(tinderUser)
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }



// Object utility helpers
console.log(Object.keys(tinderUser))
// Output: [ 'id', 'name', 'isLoggedIn' ]
// Explanation: Object.keys returns an array of property names (keys) of the object.

console.log(Object.values(tinderUser))
// Output: [ '123abc', 'Sammy', false ]
// Explanation: Object.values returns an array of property values in the same order.

console.log(Object.entries(tinderUser))
// Output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// Explanation: Object.entries returns an array of [key, value] pairs.

console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// Output: true
// Explanation: hasOwnProperty checks whether the object itself (not its prototype) has the given key.



// Destructuring and renaming
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "jayesh"     
}

const { courseInstructor: instructor } = course
console.log(instructor)
// Output: jayesh
// Explanation: destructuring pulls courseInstructor out of course and renames it to instructor.



// Example array with empty objects (structure only)
[
    {},
    {},
    {}
]
// Not printed — just shows an array that could hold objects.


/*Deep & easy explanation (plain language)
1) Objects and adding properties

const tinderUser = {} creates an empty container (object) to store related data as key: value pairs.

You can add properties later using object.key = value. This is flexible and common.

2) Dot notation vs bracket notation

obj.key is simple and used when the property name is a valid identifier.

obj["key"] is useful when the key name is in a variable or contains special characters or spaces.

For nested access use obj.level1.level2.prop.

3) Nested objects

Objects can hold other objects. To get a deeply nested value you chain dot notation:
regularUser.fullname.userfullname.firstname — start at the outermost object and go deeper level by level.

4) Spread operator { ...obj } (merging/cloning)

{...obj1, ...obj2} creates a new object copying keys from obj1 and obj2.

If both objects have the same key, the value from the later object overrides the earlier one. Example:
{...{a:1}, ...{a:2}} → {a:2}.

5) Arrays of objects

const users = [ {...}, {...} ] stores multiple related objects in a list.

Access the nth object with users[n] (n starts at 0).

6) Object helper methods

Object.keys(obj) → gives an array of keys (property names).

Object.values(obj) → gives an array of values.

Object.entries(obj) → gives array of [key, value] pairs.

obj.hasOwnProperty('key') → returns true if that key exists directly on the object.

7) Destructuring and renaming

const { courseInstructor: instructor } = course takes the courseInstructor property from course and assigns it to a new variable named instructor.

This is shorthand and keeps code cleaner when you only need a few values from an object.

8) Why we replaced "hitesh" with "jayesh"

Wherever the example used the name "hitesh" as a sample value (e.g., firstname, courseInstructor), you requested it be "jayesh". This is just sample data — you can put any string there.*/