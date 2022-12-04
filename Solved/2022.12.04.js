/* https://www.hackerrank.com/challenges/the-birthday-bar */

/*

Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:

  - The length of the segment matches Ron's birth month, and,
  - The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.
Example
s = [2, 2, 1, 3, 2]
d = 4
m = 2


Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2. In this case, there are two segments meeting her criteria: [2, 2] and [1, 3].

*/

/*

1. Inicializar uma variável contadora com 0
2. Iterar pela array para iniciar os cálculos
3. Separar uma subarray com início no índice do elemento atual e com fim índice do elemento atual + m
4. Somar o valor dessa subarray
5. Se a soma for igual a d, adicionar 1 ao contador
6. Ao final do loop, retornar o contador.

*/

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

// const s = [1, 1, 1, 1, 1, 1];
// const d = 3;
// const m = 2;

function birthday(s, d, m) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    let sum = s.slice(i, i + m).reduce((acc, curr) => acc + curr);
    if (sum === d) counter++;
  }
  return counter;
}

console.log(birthday(s, d, m));
