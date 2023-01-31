let num = 10.8;
console.log(Math.floor(num));
// 10
console.log(Math.round(num));
// 11

console.log(Math.random());
// 0 - 1
let strNum = "10.8";
console.log(Number(strNum));
// 10.8
console.log(parseInt(strNum));
// 10

let px = "10px";
console.log(Number(px));
// NaN
console.log(parseInt(px));
// 10

console.log(Math.pow(2, 3));
// 8

// ----------------------------------------------------------------
// STRINGS
let str = "abcd";
console.log(str[1]);
// b
console.log(str.charAt(1));
// b
console.log(str.includes("b"));
// true
console.log(str.includes("b"));
// false
console.log(str.startsWith("b"));
// false
console.log(str.endsWith("b"));
// false
console.log(str.toUpperCase().toLowerCase());
// substr
console.log(str.substr(1, 2));
// slice
console.log(str.slice(1, 2));
// b
console.log(str.slice(1, 3));
// bc
console.log(str.padStart(10, "-"));
// ------abcd
console.log(str.padStart(10, "-"));
// ----------------------------------------------
// OBJECTS
const person = {
  name: "Tolga",
  course: "FrontendExpert",
};

console.log(person);
// { name: 'Tolga', course: 'FrontendExpert' }
// ❗ These objects can also be converted into JSON.
console.log(JSON.stringify(person));
// {"name":"Tolga","course":"FrontendExpert"}
console.log(JSON.parse(JSON.stringify(person)));
// { name: 'Tolga', course: 'FrontendExpert' }
console.log(person.name);
// Tolga
person.name = "Tolgaaaa";
// Tolgaaa

// ------------MAPS--------------------------------
const map = new Map();
map.set(456, "hello");
map.set(123, "world");
console.log(map.size);
// 2

// ---------- SETS -------
const set = new Set();
set.add("hello");
set.add("world");
console.log(set.has("hello"));
// true
console.log(set);
// Set(2) { 'hello', 'world' }
console.log(set.size);
// 2

// functions
function addTwo(num = 8) {
  return num + 2;
}

function callFunc(func, param) {
  console.log(func(param));
}

callFunc(addTwo, 10);
// 12

// LOOPS
for (let i = 0; i < 4; i++) {
  console.log(i);
  if (i === 1) {
    break;
  }
}
// 0 1
for (let i = 0; i < 4; i++) {
  if (i === 1) {
    continue;
  }
  console.log(i);
}

// While Loop
let i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

for (const value of [1, 2, 3]) {
  console.log(value);
}

for (const value of "abc") {
  console.log(value);
}

// Array function
// first class function
[1, 2, 3].forEach(function (value) {
  console.log(value);
});
