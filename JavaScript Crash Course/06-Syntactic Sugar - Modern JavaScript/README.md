# Syntactic Sugar and Modern JavaScript

### Arrow Function

A more concise function syntax, particularly useful for replacing short anonymous functions. The basic syntax for an arrow function is :

    (param1, param2) => {
        doSomething(param1, param2);
        return 'hello world';
    }

However, if an arrow function only requires one line, then the curly braces and retur keyword can be removed. Additionally, when these are used inline such as for a call to the array map function, the semicolon must be removed. Finally, if there is only one parameter, the parentheses around the parameter can also be removed. For example, this code will create an array with the values doubled:

    [1, 2, 3, 4].map(num => num * 2);

❗ The most important of these is that arrow functions do not have their own `this` binding. Additionally, arrow functions cannot be used as constructors or generators.

### Destructuring Assignment

A JavaScript syntax for saving values from an **array** or object in variables. For example :

    const [first, second] = [ 1, 2, 3];
    console.log(first); // 1
    console.log(second); // 2

    const { name } = { name : 'Tolga' };
    console.log(name); // Tolga

When destructuring an object, fields can also be renamed, for example:

    const { name: firstName } = { name: 'Tolga' }
    console.log(firstName); // 'Tolga'

Destructuring can also be used in function parameter

    function printName( { name } ) {
    	console.log(name);
    }

### Rest Operator

A JavaScript operator using `. . .` for condensing multiple elements into a single array. This uses the same syntax as the **spread operator,** but functionally is essentially the opposite.
Rest syntax can be used in both arrays and objects to get all of the values not being **destructured.** For example :

    function myFunc(. . .myArguments) {
    	console.log(myArguments);
    }
    myFunc(1,2,3,4); // logs [1,2,3,4];

### Spread Operator

A JavaScript operator using `. . .` for expanding iterables into individual elements. For example `myFunction(...myArray)` would pass each value in myArray as individual arguments to myFunction.

The spread syntax can also be used to combine two arrays, for example, `[...arr1, ...arr2]` would make a single array with all of the values of both arrays. Similarly, objects can be spread as well.
For example, `{key: 'value', ...otherObj}` would add all of the fields from the other object into this object. Moreover, `{...obj}` can be used as a shallow clone of an object, since it creates a new object with the same fields.

### Template Literal

Strings created using backticks that allow for inlining expressions rather than needing concatenation. Inlined expressions use the syntax `${expression}`. For example, `Hello ${name}` would have the same output as `'Hello' + name`.

### Null Coalescing

Also referred to as nullish coalescing, an operator using `??` for providing a default value if a value is null. If the value on the left side of the operator is not null or undefined, that value is used. Otherwise the value on the right side of the operator used.

    const num = null ?? 1234; // 1234
    const num2 = undefined ?? 1234; // 1234
    const num3 = 5678 ?? 1234; // 5678
    const num4 = '  ' ? 1234; // ' '

### Optional Chaining

A JavaScript operator using `?.` for reading object properties without throwing an error if the object is null.
`person?.company?.website` will act the same as `person.company.website`, however if any values in the chain are null undefined, it will return undefined rather than throwing an error.

### Short Circuit Evaluation

A method of utilizing the evaluation order of JavaScript to conditionally run code. This usually uses the `&&` operator, because for it to return true, both the left and right expressions must be true. Since the browser runs code from left to right, if the encouters false on the left side, it does not even run the code on the right side.

    true && myFunc( ); // calls myFunc( )
    false && myFunc( ); // doesn't call myFunc( )

Less commonly, short circuit evaluation can also be used with the `||` operator. Since this operator only needs one expression to be true, if the left side is true then the right side will not be evaluated. This essentially the opposite of the behavior with `&&`.

    true || myFunc( );
    false || myFunc();
