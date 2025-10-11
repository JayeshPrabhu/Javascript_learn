// ✅ 'let' variable declared in global scope
let a = 300  

// ✅ Block scope with 'let' and 'const'
if (true) {
    let a = 10       // This 'a' is **only inside this block**
    const b = 20     // 'b' is **only inside this block** and cannot be changed
}

// Outside the block
// console.log(a) → 300 (outer 'a' unaffected by inner block)
// console.log(b) → Error! b is not defined outside block



// ✅ Function scope and nested functions
function one(){
    const username = "hitesh"   // Scoped to function 'one'

    function two(){
        const website = "youtube"  // Scoped to function 'two' only
        console.log(username)      // ✅ Access outer function variable via closure
    }

    two()  // Calls function 'two' from inside 'one'
}

// one() would print "hitesh" if called
// console.log(website) → Error! 'website' is not visible outside function 'two'



// ✅ Nested block scope example
if (true) {
    const username = "hitesh"   // Scoped to this 'if' block
    if (username === "hitesh") {
        const website = "youtube"  // Scoped to inner 'if' block
        // console.log(username + website) → would print "hiteshyoutube"
    }
    // console.log(website) → Error! 'website' is not accessible outside inner 'if' block
}

// console.log(username) → Error! 'username' is not in global scope



// ✅ Function hoisting example
console.log(addone(5))  // ✅ Works because function declarations are hoisted
// Output: 6

function addone(num){
    return num + 1
}



// ✅ Function expression (not hoisted like declarations)
addTwo(5)  // ❌ Error! Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

// Explanation:
// 1. 'addone' is a function declaration → fully hoisted → can call before definition
// 2. 'addTwo' is a function expression assigned to 'const' → not hoisted
//    Only the variable 'addTwo' is hoisted, but it is uninitialized until the assignment happens
//    → Calling it before assignment gives ReferenceError

/*   Key Concepts in this code

let vs const vs var

let → block scoped, cannot redeclare in the same scope.

const → block scoped, must be initialized, cannot be reassigned.

var → function scoped, hoisted, can be redeclared.

Block Scope

Variables inside {} (if, for, etc.) are not accessible outside if declared with let or const.

Function Scope & Closures

Functions create their own scope.

Inner functions can access outer function variables → called closure.

Outer function cannot access variables of inner functions.

Hoisting

Function declarations (function f(){}) → fully hoisted.

Function expressions (const f = function(){}) → not hoisted; calling before definition → ReferenceError.

Nested Blocks

Variables declared inside nested blocks are invisible outside that block.*/