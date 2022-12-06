/* https://www.hackerrank.com/challenges/migratory-birds/*/

/*

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example
arr = [1, 1, 2, 2, 3]
There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1. 

*/

/*

1. Inicializar uma array de objetos;
2. Iterar pela array;
3. Verificar se já existe objeto com o tipo igual ao do elemento atual. Se não existir, criar um objeto que contenha tipo e contador, inicializando o contador com 1. Se existir, adicionar 1 ao contador;
4. Ao final do loop, verificar os contadores dos objetos da array. Se nenhum deles for repetido, retornar o tipo do menor contador. Se algum deles for repetido, retornar o menor tipo.

*/

const arr = [1, 4, 4, 4, 5, 3];

function migratoryBirds(arr) {
  const counts = {}
  arr.forEach(count => {
    counts[count] = (counts[count] || 0) + 1;
  });

  const maximumValue = Math.max(...Object.values(counts));
  const mostSightedBird = Object.keys(counts).find(key => counts[key] === maximumValue);

  return mostSightedBird;
}

console.log(migratoryBirds(arr));

