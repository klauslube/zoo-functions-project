const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimals() {
  const objLocations = species.reduce((acc, specie) => {
    const array = acc[specie.location];
    if (!array) acc[specie.location] = [];
    acc[specie.location].push(specie.name);
    return acc;
  }, {});
  return objLocations;
}

function getNames(options) {
  const obj = species.reduce((acc, specie) => {
    if (!acc[specie.location]) acc[specie.location] = [];
    const animalsName = specie.residents.map((animal) => animal.name);
    acc[specie.location].push({ [specie.name]: options.sorted ? animalsName.sort() : animalsName });
    return acc;
  }, {});
  console.log(obj);
  return obj;
}

function getSex(options) {
  const Sex = species.reduce((acc, specie) => {
    if (!acc[specie.location]) acc[specie.location] = [];
    const animal = specie.residents.filter((ani) => ani.sex === options.sex).map((ani) => ani.name);
    acc[specie.location].push({ [specie.name]: options.sorted ? animal.sort() : animal });
    return acc;
  }, {});
  return Sex;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return getAnimals();
  if (options.includeNames) {
    if (options.sex) return getSex(options);
    return getNames(options);
  }
}

module.exports = getAnimalMap;
