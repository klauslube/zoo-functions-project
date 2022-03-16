const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const find = species.find((nome) => nome.name === animal);
  const everyResident = find.residents.every((resi) => resi.age >= age);
  // console.log(everyResident);
  return everyResident;
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
