const globalNum = 5;

function logNum() {
  const localNum = 1;
  console.log(globalNum + localNum);
}

logNum();

function example() {
  const num = 5;

  function logNum(num) {
    console.log(num);
  }

  logNum(10);
}

example();

function example() {
  const num = 5;

  return function () {
    console.log(num);
  };
}

const innerFunction = example();
innerFunction();
// 5

// ----------------------------------------------------------------
function makeFunction() {
  let privateNum = 0;
  function privateIncrement() {
    privateNum++;
  }

  return {
    logNum: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log("Increment!");
    },
  };
}

const { logNum: logNum1, increment: increment1 } = makeFunction();
const { logNum: logNum2, increment: increment2 } = makeFunction();
logNum1();
increment1();
logNum1();

logNum2();
increment2();
logNum2();

// ----------------------------------------------------------------

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);
}
