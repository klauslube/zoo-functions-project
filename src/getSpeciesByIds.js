const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// console.log(data.employees);

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) return [];
  return species.filter((animalId) =>
    ids.some((value) => animalId.id === value));
}

module.exports = getSpeciesByIds;
