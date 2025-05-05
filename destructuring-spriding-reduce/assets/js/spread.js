// SPREAD OPERATOR

// example 1: Spread operator with array
// The spread operator is used to expand an iterable (like an array) into its individual elements.
let arr = [1, 2, 3, 4, 5];

console.log(...arr); // 1 2 3 4 5


// example 2: Spread operator with function arguments
// The spread operator can be used to pass an array as individual arguments to a function.
let arr2 = [6, 7, 8, 9, 10];
let arr3 = [...arr, ...arr2]; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// example 3: Spread operator with object
// The spread operator can also be used to copy properties from one object to another.
let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    c: 3,
    d: 4
};
let obj3 = {...obj1, ...obj2}; // {a: 1, b: 2, c: 3, d: 4}
console.log(obj3); // {a: 1, b: 2, c: 3, d: 4}

// this is destructuring assignment
let array = [1, 2, 3, 4, 5];
let [a, b] = array;
[a, b] = [b, a];
console.log(a, b); // 2 1

// example 1: Destructuring assignment with array
// Destructuring assignment is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
let arr4 = [1, 2, 3, 4, 5];
let [x, y, z] = arr4; // x = 1, y = 2, z = 3
console.log(x, y, z); // 1 2 3