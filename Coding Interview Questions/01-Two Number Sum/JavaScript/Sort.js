// O(nlog(n)) | O(1)

function twoNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    let currentSum = array[leftPointer] + array[rightPointer];

    if (currentSum === targetSum) {
      return [array[leftPointer], array[rightPointer]];
    } else if (currentSum < targetSum) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }
  return [];
}
