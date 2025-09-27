// Creating strings
const name = "Jayesh";                  // string literal
const repoCount = 18;
const gameName = new String("jayesh");  // string object (rarely used)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


console.log(name.length); // 6

name.toUpperCase();   // "JAYESH"
name.toLowerCase();   // "jayesh"

name.charAt(2);    // "y"
name.charCodeAt(0); // 74 (Unicode for 'J')
name[0];           // "J"

name.indexOf("a");      // 1 (first occurrence)
name.lastIndexOf("h");  // 5
name.includes("yes");   // true
name.startsWith("Ja");  // true
name.endsWith("sh");    // true

name.slice(0, 3);    // "Jay"
name.substring(1, 4); // "aye"
name.substr(1, 3);   // "aye" (deprecated, avoid)

"Hello World".replace("World", "Jayesh"); // "Hello Jayesh"
"Hello World".replaceAll("l", "x");       // "Hexxo Worxd"
"   trim me   ".trim();                   // "trim me"
"   trim me   ".trimStart();              // "trim me   "
"   trim me   ".trimEnd();                // "   trim me"

"apple,banana,orange".split(","); // ["apple", "banana", "orange"]
["apple","banana"].join(" - ");   // "apple - banana"


"Hi".repeat(3);          // "HiHiHi"
"5".padStart(4, "0");    // "0005"
"5".padEnd(4, "0");      // "5000"

const age = 22;
console.log(`My name is ${name} and I am ${age} years old.`);


const str = "JavaScript";

// Basic usage
console.log(str.substring(0, 4));   // "Java"
console.log(str.substring(4, 10));  // "Script"

// If endIndex is omitted
console.log(str.substring(4));      // "Script"

// If start > end, it swaps them
console.log(str.substring(7, 4));   // "Scr"  (same as substring(4,7))

// Negative values are treated as 0
console.log(str.substring(-2, 4));  // "Java"
