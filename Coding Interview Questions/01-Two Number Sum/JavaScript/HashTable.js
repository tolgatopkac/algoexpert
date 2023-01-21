// O(n) time | O(n) space
function twoNumberSum(array, targetSum) {
  let nums = {};

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let counterpart = targetSum - currentNum;

    if (counterpart in nums) {
      return [currentNum, counterpart];
    } else {
      nums[currentNum] = true;
    }
  }
  return [];
}
