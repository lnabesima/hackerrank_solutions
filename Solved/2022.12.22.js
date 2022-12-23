/* https://www.hackerrank.com/challenges/picking-numbers/ */

/*

Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

Example
a = [1, 1, 2, 2, 4, 4, 5, 5, 5]
There are two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.

*/

/* 

1. Inicializar uma variável para controlar o início, o final e o comprimento do intervalo da verificação, todos com o valor de 0;
2. Ordenar a array passada em ordem crescente;
3. Iterar pela array criando uma "janela de verificação", atualizando o final do intervalo com o valor do elemento atual do loop;
4. Caso o valor absoluto da diferença entre o início e o final da janela for maior que 1, incrementar o valor do início da janela em 1 e reiniciar o loop;
5. Caso o valor da diferença seja menor ou igual a 1, definir o valor de `maxLength` o maior valor entre o valor atual de `maxLength` e `end - start + 1`;
6. Retornar o valor de `maxLength`.

*/

// const a = [1, 1, 2, 2, 4, 4, 5, 5, 5];
// const a = [1, 2, 2, 3, 1, 2];
const a = [4, 6, 5, 3, 3, 1];

function pickingNumbers(a) {
  let start = 0;
  let end = 0;
  let maxLength = 0;

  a.sort((a, b) => a - b);

  a.forEach((_, i) => {
    end = i;
    if (Math.abs(a[start] - a[end]) > 1) {
      start++;
    } else {
      maxLength = Math.max(maxLength, end - start + 1);
    }
  });
  return maxLength;
}


console.log(pickingNumbers(a));
