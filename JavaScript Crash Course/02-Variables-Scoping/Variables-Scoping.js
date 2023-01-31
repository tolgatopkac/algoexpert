var varNum = 0;
let letNum = 0;

console.log("varNum: ", varNum);
console.log("letNum: ", letNum);

// ----------------------------------------------------------------
function test() {
  var varNum2 = 0;
}
// ----------------------------------------------------------------
function test() {
  if (true) {
    var varNum2 = 0;
    let letNum2 = 0;
  }

  console.log("varNum", varNum2);
  console.log("letNum", letNum2);
}
test();
