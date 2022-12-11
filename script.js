/* https://www.hackerrank.com/challenges/drawing-book */

/*

A teacher asks the class to open their books to a page number. A student can either start turning pages from the front of the book or from the back of the book. They always turn pages one at a time. When they open the book, page 1 is always on the right side.

When they flip page 1, they see pages 2 and 3. Each page except the last page will always be printed on both sides. The last page may only be printed on the front, given the length of the book. If the book is n pages long, and a student wants to turn to page p, what is the minimum number of pages to turn?  They can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages that must be turned in order to arrive at page p.

Example:
n = 5
p = 2

If the student wants to get to page 3, they open the book to page 1, flip 1 page and they are on the correct page.  If they open the book to the last page, page 5, they turn 1 page and are at the correct page. Return 1.

*/

/* 

1. Criar uma array com todos os elementos de 0 a n;
2. Parear esses elementos de 2 em 2, criando uma array de arrays;
3. Verificar qual o índice (viradas de página) para encontrar a página-alvo a partir do início e armazenar em uma variável;
4. Reverter a array;
5. Verificar qual o índice (viradas de página) para encontrar a página-alvo a partir do final e armazenar em uma variável;
6. Retornar a menor das duas variáveis

*/

const n = 7; //total pages on the book
const p = 3; //target page

console.time();
function pageCount(n, p) {
  const numbers = Array.from({ length: n + 1 }, (_, i) => i);
  const pairs = numbers
    .map((_, i) => numbers.slice(i * 2, i * 2 + 2))
    .filter(pair => pair.length !== 0);

  const findPFromFront = pairs.findIndex(arr => arr.includes(p));

  const reversedPairs = pairs.reverse();
  const findPFromBack = reversedPairs.findIndex(arr => arr.includes(p));

  return Math.min(findPFromFront, findPFromBack);
}
console.timeEnd();

console.log(pageCount(n, p));
