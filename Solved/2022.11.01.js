/* https://www.hackerrank.com/challenges/a-very-big-sum/problem */

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

function aVeryBigSum(ar) {
  return ar.reduce((previous, current) => previous + current);
}

console.log(aVeryBigSum(ar));
/*-------------------------------------------------------------------------*/

/* https://www.hackerrank.com/challenges/diagonal-difference/ */

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];
function diagonalDifference(arr) {
  let sum1 = 0;
  let sum2 = 0;
  let len = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[len][i];
    len--;
  }
  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference(arr));
