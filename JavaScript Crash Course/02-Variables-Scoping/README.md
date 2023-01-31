# Variables & Scoping

### let

a keyword for declaring a **block-scoped** variable that cannot be accessed before initialization.

### var

A keyword for declaring a function-scoped variable that is automatically initialized to `undefined` when it is **hoisted.**

### const

A keyword for declaring a constant value. Constants have the same behavior as variables declared with `let`, except they cannot be reassigned.

### Block Scope

The behavior of a variable that is only accessible inside of the block it was defined. Most of the time, the block will simply be the nearest pair of curly braces the declaration.

### Hoisting

The process by which the JavaScript engine moves variable declarations to the top of their scope, allocating memory for them before reaching the line of code where they are declared.
For variables declared with `var`, they are initialized to `undefined` until reaching the line of code that initializes the variable.
For variables declared with `let`or `const`the variable is not initalized and thus cannot be accessed before the line of code that initializes.

    console.log(varNum) // undefined
    console.log(letNum) // reference error

    var varNum = 5;
    let letNum = 5;

    console.log(varNum) // 5
    console.log(varNum) // 5
