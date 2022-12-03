/* https://www.hackerrank.com/challenges/breaking-best-and-worst-records */

/*

Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example
scores = [12, 24, 10, 24]
Scores are in the same order as the games played. She tabulates her results as follows:

                                      Count
    Game  Score  Minimum  Maximum   Min Max
      0      12     12       12       0   0
      1      24     12       24       0   1
      2      10     10       24       1   1
      3      24     10       24       1   1

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.
*/

/*
1. Inicializar variável para máximo
2. Inicializar variável para mínimo
3. Pegar o primeiro item da array e setar como máximo e mínimo
4. Iterar pela array e verificar se o elemento é maior ou menor que o máximo. Se maior, adicionar 1 ao contador de máximo.
5. Iterar pela array e verficiar se o elemento é maior ou menor que o mínimo. Se menor, adicionar 1 ao contador de mínimo.
6. Retornar os contadores.

*/

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];

function breakingRecords(scores) {
  let maxScore = scores[0]; //3
  let minScore = scores[0]; //3
  let timesMaximumScoreRecordBroken = 0;
  let timesMinimumScoreRecordBroken = 0;

  scores.forEach(cur => {
    if (cur > maxScore) {
      maxScore = cur;
      timesMaximumScoreRecordBroken += 1;
    }

    if (cur < minScore) {
      minScore = cur;
      timesMinimumScoreRecordBroken += 1;
    }
  });
  return [timesMaximumScoreRecordBroken, timesMinimumScoreRecordBroken]; //[4, 0]
}

console.log(breakingRecords(scores));
