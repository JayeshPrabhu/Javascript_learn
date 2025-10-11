const isUserloggedIn = true       // ✅ A boolean variable set to true (not used later)
const temperature = 41            // ✅ Variable holding the current temperature

if (temperature === 40) {         // Checks if temperature is exactly equal to 40 (strict equality)
    console.log("less than 50");  // ❌ Not executed because 41 !== 40
} else {
    console.log("temperature is greater than 50");  
    // ✅ Executed → Output: "temperature is greater than 50"
}

console.log("Execute");           // ✅ Always runs → Output: "Execute"


const score = 200                 // ✅ Numeric variable

if (score > 100) {                // ✅ 200 > 100 → true
    let power = "fly"             // Local variable (only accessible inside this block)
    console.log(`User power: ${power}`);  
    // ✅ Output: "User power: fly"
}

console.log(`User power: ${power}`);  
// ❌ ERROR → ReferenceError: power is not defined
// Because 'power' was declared with let inside the if-block and can't be accessed outside.


const balance = 1000              // ✅ Numeric variable

if (balance > 500) console.log("test"), console.log("test2");
// ✅ This line uses commas to run multiple statements in one line.
// ✅ Output:
// test
// test2


if (balance < 500) {              // 1000 < 500 → false, skip this block
    console.log("less than 500");
} else if (balance < 750) {       // 1000 < 750 → false
    console.log("less than 750");
} else if (balance < 900) {       // 1000 < 900 → false
    console.log("less than 750");
} else {
    console.log("less than 1200");  
    // ✅ Runs because all above are false → Output: "less than 1200"
}


const userLoggedIn = true         // ✅ User is logged in
const debitCard = true            // ✅ Has a debit card
const loggedInFromGoogle = false  // ❌ Not logged in via Google
const loggedInFromEmail = true    // ✅ Logged in via Email

if (userLoggedIn && debitCard && 2 == 3) {  
    // false → because 2 == 3 is false, even though first two are true
    console.log("Allow to buy course");  
    // ❌ Not executed
}

if (loggedInFromGoogle || loggedInFromEmail) {
    // true → because loggedInFromEmail is true
    console.log("User logged in");  
    // ✅ Output: "User logged in"
}
