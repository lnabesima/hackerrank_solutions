/* https://www.hackerrank.com/challenges/magic-square-forming */

/*

We define a magic square to be an n x n matrix of distinct positive integers from 1 to n2 where the sum of any row, column, or diagonal of lenght n is always equal to the same number: the magic constant.
You will be given a 3 x 3 matrix s of integers in the inclusive range [1, 9]. We can convert any digit b in the range [1, 9] at cost of |a-b|. Given s, convert it into a magic square at minimal cost. Print this cost on a new line.
Note: The resulting magic square must contain distinct integers in the inclusive range [1, 9]

Example:
s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]] 

The matrix looks like this:
5 3 4
1 5 8
6 4 2

We can convert it to the following magic square:
8 3 4
1 5 9
6 7 2

This took three replacements at a cost of |5 - 8| + |8 - 9| + |4 - 7| = 7

*/

/* 

1. Determinar todos os quadrados mágicos possíveis;
2. Comparar o valor do quadrado s informado com os quadrados possíveis;
3. Verificar o custo de substituir os números de s para os quadrados possíveis;
4. Retornar o menor custo possível;

*/

const s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

function formingMagicSquare(s) {
  const possibleMagicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
  ];

  let minCost = Infinity;
  for (let index = 0; index < possibleMagicSquares.length; index++) {
    let currentCost = 0;
    for (let line = 0; line < possibleMagicSquares[index].length; line++) {
      for (
        let column = 0;
        column < possibleMagicSquares[index][line].length;
        column++
      ) {
        currentCost += Math.abs(
          s[line][column] - possibleMagicSquares[index][line][column]
        );
      }
    }
    currentCost < minCost ? (minCost = currentCost) : null;
  }
  return minCost;
}

console.log(formingMagicSquare(s));
