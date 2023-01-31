const arr = [1, 2, 3];

const arr2 = new Array(1, 2, 3);
// [1,2,3]

const arr3 = new Array(5);
// [<5 empty items>]

// Fill Function
const arr4 = new Array(5).fill(0);
// [ 0, 0, 0, 0, 0 ]

// includes
console.log(arr.includes(3));
// true

// indexOf
console.log(arr.indexOf(3));
// 2

// lastIndexof
console.log(arr.lastIndexOf(3));
// 2

// push - add new array to array
arr.push(4);
console.log(arr);
// [1,2,3,4]

// pop - remove last element from the array
// Pop also returns the value it removed.
console.log(arr.pop());
// 3

// unshift(); the same thing as Push but at the beginning
arr.unshift(5);
// arr = [5,1,2,3]

// shift();  -- remove first element from the array
arr.shift();

// isArray
console.log(Array.isArray(arr));
// true

// splice(start,quantity)
arr.splice(1, 2);
// start 1. index - delete two element

arr.splice(0, 2, "hello", "world");
// [ 'hello', 'world', 3 ]

arr.splice(1, 0, "hello", "world");
console.log(arr);
// [ 1, 'hello', 'world', 2, 3 ]

// slice
console.log(arr);
const newArr = arr.slice(1, 3);
console.log(newArr);
// [2, 3];

// concat
const newArr2 = arr.concat(["hello", "world"]);
console.log(newArr);
// [ 1, 2, 3, 'hello', 'world' ]

// reverse
arr.reverse();
// [ 3, 2, 1 ]

// join();
console.log(arr.join());
// 1,2,3
console.log(arr.join("|"));
// 1|2|3
console.log(arr.join(" "));
// 1 2 3

// LOOP Through the elements in the array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for of
for (const value of arr) {
  console.log(arr[value]);
}

// forEach
arr.forEach(
  function (value, index) {
    console.log(value, index, this);
  },
  { num: 10 }
);

// Map function
const mappedArray = arr.map(
  function (val, index) {
    return val + index + this.num;
  },
  { num: 10 }
);

console.log(mappedArray);
// [ 11, 13, 15 ]

// filter (return new array)
const filteredArray = arr.filter(
  function (value, index, array) {
    return value > this.num;
  },
  { num: 1 }
);

console.log(arr);
// [ 1, 2, 3 ]
console.log(filteredArray);
// [ 2, 3 ]

// REDUCE
const sum = arr.reduce(function (acc, curValue) {
  console.log("here");
  return acc + curValue;
}, 0);
// 6

// Sorting Array
arr.sort(compareNumbers);
function compareNumbers(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
// [ 1, 2, 3 ]
function compareNumbers2(firstNumber, secondNumber) {
  return secondNumber - firstNumber;
}
// [ 3, 2, 1 ]
