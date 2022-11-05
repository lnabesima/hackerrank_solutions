/* https://www.hackerrank.com/challenges/birthday-cake-candles */

/* 

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candles = [4, 4, 1, 3]
The maximum height candles are 4 units high. There are 2 of them, so return 2.
*/

const candles = [4, 4, 1, 3];

function birthdayCakeCandles(candles) {
  const max = Math.max(...candles);

  const count = candles.reduce((acc, cur) => {
    cur === max && acc++;
    return acc;
  }, 0);

  console.log(count);
  return count;
}

console.log(birthdayCakeCandles(candles));
