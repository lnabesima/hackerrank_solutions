/* https://www.hackerrank.com/challenges/staircase/ */

/*
This is a staircase of size n = 4:
   #
  ##
 ###
####
*/

const n = 4;

function staircase(n) {
  for (let i = 0; i < n; i++) {
    const base = '#'.repeat(n + 1).slice(n - i);
    const newStr = base.padStart(n);
    console.log(newStr);
  }
}

console.log(staircase(n));
