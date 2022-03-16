const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(data.employees);

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return species.filter((animalId) =>
    ids.some((value) => animalId.id === value));
}

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46', '0938aa23-f153-4937-9f88-4858b24d6bce'));
module.exports = getSpeciesByIds;
