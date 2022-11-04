/* Mini-Max Sum */

/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example:
arr = [1, 3, 5, 7, 9]
The minimum sum is 1 + 3 + 5 + 7 = 16 and the maximum sum is 3 + 5 + 7 + 9 = 24. The function prints: 16 24
*/

const arr = [1, 9, 3, 7, 5];

function miniMaxSum(arr) {
  let minSum = 0;
  let maxSum = 0;

  let sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < 4; i++) {
    minSum += sortedArr.slice(0, 4)[i];
    maxSum += sortedArr.slice(-4)[i];
  }

  return `${minSum} ${maxSum}`;
}

console.log(miniMaxSum(arr));
