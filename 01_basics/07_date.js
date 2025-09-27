// ---------------------- Create Date ----------------------

// Current date & time
let myDate = new Date(); 
console.log(myDate.toString());       // Full date & time
console.log(myDate.toDateString());   // Only date
console.log(myDate.toLocaleString()); // Local format
console.log(typeof myDate);           // "object"

// Specific date creation
let myCreatedDate = new Date(2023, 0, 23);          // Jan 23, 2023 (month 0 = January)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);  // Jan 23, 2023, 05:03
let myCreatedDate3 = new Date("2023-01-14");       // From ISO string
let myCreatedDate4 = new Date("01-14-2023");       // From custom string format

console.log(myCreatedDate4.toLocaleString());      // Local date & time

// ---------------------- Timestamps ----------------------

// Current timestamp in milliseconds
let myTimeStamp = Date.now();
console.log(myTimeStamp);           // e.g., 1695800000000

// Timestamp from a date object
console.log(myCreatedDate4.getTime());

// Convert timestamp to seconds
console.log(Math.floor(Date.now() / 1000)); 

// ---------------------- Get Date Components ----------------------
let newDate = new Date();

console.log(newDate);              // Full date object
console.log(newDate.getMonth() + 1); // Month (0–11) → +1 to match 1–12
console.log(newDate.getDay());       // Day of the week (0=Sunday, 6=Saturday)

// Template literal example
console.log(`${newDate.getDay()} and the time`);

// ---------------------- Format Weekday ----------------------
console.log(
  newDate.toLocaleString('default', { weekday: "long" }) 
); // "Sunday", "Monday", etc.
