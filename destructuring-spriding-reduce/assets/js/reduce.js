let arr = [1, 2, 3, 4, 5];

let reduce = arr.reduce((accumulator, currentValue, idx, orgArr) => {
    return accumulator + currentValue;
}, 0); // Output: Accumulator: 0, Current Value: 1
console.log(reduce); // Output: 15
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.


// find the max value in an array
let arr1 = [1, 2, 3, 14, 5];

let maxs = arr1.reduce((accumulator, currentValue) => {
    return (accumulator) = (accumulator > currentValue) ? accumulator : currentValue;
}, 0); // Output: Accumulator: 0, Current Value: 1

console.log(maxs); // Output: 5

// Dictionary
let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
let obj = {}

for (let value of fruits) {
    obj[value] = obj[value] ? obj[value] + 1 : 1;
}
console.log(obj);





