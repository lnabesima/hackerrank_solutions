/* https://www.hackerrank.com/challenges/sock-merchant */

/*

There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example

n = 7;
ar = [1, 2, 1, 2, 1, 3, 2]
There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2. 

*/

/* 

  1. Definir um objeto para armazenar a quantidade de meias que existem na pilha;
  2. Inicializar uma variável para contar a quantidade de pares;
  3. Iterar pelo objeto e dividir o valor de cada chave por 2;
  4. Somar o valor do inteiro de cada divisão e armazenar o valor na variável de contagem;
  5. Retornar a variável de contagem.

*/

const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(n, ar) {
  const socksQuantity = {};
  let pairQuantity = 0;
  ar.forEach(sock => {
    socksQuantity[sock] = (socksQuantity[sock] || 0) + 1;
  });

  const groupedSocks = Object.values(socksQuantity);
  groupedSocks.forEach(group => (pairQuantity += Math.trunc(group / 2)));

  return pairQuantity;
}

console.log(sockMerchant(n, ar));
