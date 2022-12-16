/* https://www.hackerrank.com/challenges/cats-and-a-mouse/ */

/*

Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C. Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line.

  If cat A catches the mouse first, print Cat A.
  If cat B catches the mouse first, print Cat B
  If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

Example:
x = 2
y = 5
z = 4

The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4. Cat B, at position 5 will arrive first since it is only unit away while the other is units away. Return 'Cat B'. 

*/

/* 

1. Verificar qual o delta absoluto entre as posições do gato A e do rato;
2. Verificar qual o delta absoluto entre as posições do gato B e do rato;
3. Se os dois valores forem iguais, retornar 'Mouse C'. Se o delta do gato A for menor que o delta do gato B, retornar 'Cat A'. Se for o contrário, retornar 'Cat B'.

*/

const q = 2; //queries
const x = 1; //cat A
const y = 3; //cat B
const z = 2; //mouse C

function catAndMouse(x, y, z) {
  const deltaCatA = Math.abs(x - z);
  const deltaCatB = Math.abs(y - z);

  return deltaCatA === deltaCatB
    ? 'Mouse C'
    : deltaCatA < deltaCatB
    ? 'Cat A'
    : 'Cat B';
}

console.log(catAndMouse(x, y, z));
