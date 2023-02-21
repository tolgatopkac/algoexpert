function sortedSquaredArray(array) {
  let sortedSquaredArray = [];

  function compareNumbers(a, b) {
    return a - b;
  }

  for (let i = 0; i < array.length; i++) {
    let value = array[i] ** 2;
    sortedSquaredArray.push(value);
  }

  return sortedSquaredArray.sort(compareNumbers);
}

// ----------------------------------------------------------------
// O(nlogn) time | O(n) space
// Alternative
function sortedSquaredArray(array) {
  let sortedSquares = [];

  for (let i = 0; i < array.length; i++) {
    let value = array[i] ** 2;
    sortedSquares.push(value);
  }
  sortedSquares = sortedSquares.sort((a, b) => a - b);
  return sortedSquares;
}
