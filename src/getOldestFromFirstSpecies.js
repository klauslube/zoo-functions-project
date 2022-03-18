const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/// método 1 ///
/* function getOldestFromFirstSpecies(id) {
  const employee = employees.find((Id) => Id.id === id).responsibleFor[0];
  const filterRes = species.filter((res) => res.id === employee);
  const residents = filterRes.reduce((acc, animal) => {
    acc = animal.residents.sort((a, b) => b.age - a.age);
    return acc;
  }, []);
  return Object.values(residents[0]);
} */

/// método 2 ///
function getOldestFromFirstSpecies(id) {
  const employee = employees.find((Id) => Id.id === id).responsibleFor[0];
  const filterRes = species.filter((res) => res.id === employee);
  const { residents } = filterRes[0];
  const objResidents = residents.sort((a, b) => b.age - a.age);
  return Object.values(objResidents[0]);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
