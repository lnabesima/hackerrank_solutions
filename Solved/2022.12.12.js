/* https://www.hackerrank.com/challenges/counting-valleys/ */

/*

An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

  A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
  A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example
steps = 8
path = [DDUUUUDD]

The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike. The returned value will be 1.

*/

/* 

1. Criar uma variável para acompanhar a elevação do terreno;
2. Converter a string em uma array de números para calcular a elevação atual, 1 para U e -1 para D;
3. Criar um contador para acompanhar o número de vales;
4. Criar um contador para acompanhar o número de montanhas;
5. Iterar pela array e somar o valor do elemento atual com o valor da variavel landLevel;
6. Verificar o valor. Se landLevel tiver o valor de 0 e o passo atual for de descida (-1), incrementar 1 ao contador de vales. Se landLevel for 0 e o passo atual for de subida (1), adicionar 1 ao valor do contador de montanhas;
7. Retornar o valor do contador de vales.

*/

const steps = 8;
const path = `UDDDUDUU`;

console.time();
function countingValleys(steps, path) {
  let landLevel = 0;
  const numPath = path
    .replace(/U/g, '1,')
    .replace(/D/g, '-1,')
    .split(',')
    .filter(el => el !== '')
    .map(ele => Number(ele));

  const topography = numPath.reduce(
    (acc, cur) => {
      landLevel === 0 && cur === 1 && acc.mountains++;
      landLevel === 0 && cur === -1 && acc.valleys++;

      landLevel += cur;

      return acc;
    },
    { mountains: 0, valleys: 0 }
  );

  return topography.valleys;
}
console.timeEnd();

console.log(countingValleys(steps, path));
