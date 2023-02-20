// O(n) time
// O(1) space
function isValidSubsequence(array, sequence) {
  // define pointer
  let index = 0;

  // if sequence is empty
  for (let i = 0; i < array.length; i++) {
    if (index === sequence.length) {
      break;
    }

    if (array[i] === sequence[index] && index < sequence.length) {
      index++;
    }
  }

  return index === sequence.length;
}

// ----------------------------------------------------------------

function isValidSubsequenceAlt(array, sequence) {
  let index = 0;

  for (const value of array) {
    if (index === sequence.length) break;
    if (sequence[index] === value) index++;
  }

  return index === sequence.length;
}
