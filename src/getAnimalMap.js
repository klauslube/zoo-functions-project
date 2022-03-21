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
  if (options.includeNames) {
    const obj = species.reduce((acc, specie) => {
      if (!acc[specie.location]) acc[specie.location] = [];
      const animalsName = specie.residents.map((animal) => animal.name);
      // console.log(animalsName);
      acc[specie.location].push({ [specie.name]: animalsName });
      // if (options.sex) {

      // }
      // console.log(acc);
      return acc;
    }, {});
    return obj;
  }
}

// function popAnimals(options) {
//   const animalsName = species.residents.map((animal) => animal.name);
//   const getSex = species.reduce((acc, specie) => {
//     if (!acc[specie.location]) acc[specie.location] = [];
//     const animals = species.residents.filter((animal) => animal.sex === options.sex);
//   }, {});
// }

function getSortNames(options) {
  if (options.sorted) {
    const obj = species.reduce((acc, specie) => {
      if (!acc[specie.location]) acc[specie.location] = [];
      const animalsName = specie.residents.map((animal) => animal.name).sort();
      // animalsName.sort();
      acc[specie.location].push({ [specie.name]: animalsName });
      // console.log(animalsName);
      return acc;
    }, {});
    // console.log(obj);
    return obj;
  }
}

function getAnimalMap(options) {
  if (!options || options.sex) return getAnimals();
  // if (options.includeNames) return getNames(options);
  if (options.includeNames) {
    return getSortNames(options) ? getSortNames(options) : getNames(options);
  }
}
// console.log(JSON.stringify(getSortNames({ includeNames: true, sorted: true }), undefined, 2));
console.log(getNames({ includeNames: true, sex: 'male' }));

module.exports = getAnimalMap;
