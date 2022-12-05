/* https://www.hackerrank.com/challenges/divisible-sum-pairs */

/*

Given an array of integers and a positive integer k, determine the number of pairs (i, j) where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1, 2, 3, 4, 5, 6]
k = 5

Three pairs meet the criteria: [1, 4], [2, 3] and [4, 6]. 

*/

/*

1. Inicializar uma variável contadora com 0;
2. Iterar pela array para iniciar os cálculos;
3. Iterar novamente pela array, definindo como início do loop o índice do elemento ativo do loop anterior + 1;
4. Somar os elementos ativos dos dois laços;
5. Se o resultado da soma for divisível pela variável k, adicionar 1 ao contador
6. Ao final dos loops, retornar o contador.

*/

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      (ar[i] + ar[j]) % k === 0 ? counter++ : null;
    }
  }
  return counter;
}
console.log(divisibleSumPairs(n, k, ar));
