// state -> pending, fulfilled, rejected

const promise = new Promise((resolve, reject) => {
  resolve(2);
});
console.log(promise);
// 2

const promiseReject = new Promise((resolve, reject) => {
  reject(2);
});
console.log(promiseReject);
// Error

// ----------------------------------------------------------------
const promise3 = Promise.resolve(3);
console.log(promise3);

promise3
  .then((value) => value * 2)
  .then((value) => value + 1)
  .then((value) => {
    throw new Error("Something went wrong");
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
    return 10;
  })
  .then(console.log)
  .finally(() => console.log("done"));

// PROMISE.ALL
// Promise.race
// Promise.any

// ------------------------------ASYNC AWAIT----------------------------------
function tester() {
  return 3;
}

console.log(tester());
// 3

async function tester2() {
  return 3;
}

console.log(tester2());
// Promise { 3 }

// ----------------------------------------------------------------
async function tester4() {
  const value = await new Promise((res, rej) => setTimeout(() => res(3), 1000));

  console.log(value);
}

tester4();
