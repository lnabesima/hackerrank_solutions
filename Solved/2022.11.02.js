/* https://www.hackerrank.com/challenges/plus-minus */

/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Example
arr = [1, 1, 0, -1, -1]

There are elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000 and 1/5 = 0.200000. Results are printed as: 

0.400000
0.400000
0.200000


Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with 6 digits after the decimal. The function should not return a value. 
*/

const arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  const denominator = arr.length;
  const numerator = arr.reduce(
    (acc, cur) => {
      cur < 0 && acc.negative++;
      cur === 0 && acc.zero++;
      cur > 0 && acc.positive++;

      return acc;
    },
    { positive: 0, negative: 0, zero: 0 }
  );

  console.log(
    `${(numerator.positive / denominator).toFixed(6)}\n${(
      numerator.negative / denominator
    ).toFixed(6)}\n${(numerator.zero / denominator).toFixed(6)}`
  );
}

plusMinus(arr);
