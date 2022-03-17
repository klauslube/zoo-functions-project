const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, item) => {
      acc[item.name] = item.residents.length;
      return acc;
    }, {});
  }
  if (animal.specie) {
    const name = species.find((especie) => especie.name === animal.specie);
    if (animal.sex) {
      const sex = name.residents.filter((count) => count.sex === animal.sex);
      return sex.length;
    }
    return name.residents.length;
  }
}

module.exports = countAnimals;
