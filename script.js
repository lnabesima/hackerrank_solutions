/* https://www.hackerrank.com/challenges/compare-the-triplets */

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const a = [17, 28, 30];
const b = [99, 16, 8];

function compareTriplets(a, b) {
  let aPoints = 0;
  let bPoints = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) aPoints++;
    if (a[i] < b[i]) bPoints++;
  }
  return [aPoints, bPoints];
}

console.log(compareTriplets(a, b));
