const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecie(idSpec) {
  const specieName = species.filter((specie) => idSpec.some((id) => id === specie.id));
  const getSpecies = specieName.map((specie) => specie.name);
  return getSpecies;
}

// function getEmployeeName(employeeName) {
//   const som = employees.some((em) => em.firstName === employeeName || em.lastName === employeeName);
//   if (som === true) return employees.map((employe) => employe.firstName.concat(` ${employe.lastName}`));
// }
// function getEmployeeID(employeeId) {
//   const getId = employees.find((id) => id.id === employeeId);
//   return getId;
// }

function getSpecieLocation(idSpec) {
  const specieName = species.filter((specie) => idSpec.some((id) => id === specie.id));
  const getLocation = specieName.map((specie) => specie.location);
  return getLocation;
}

function verify(nameOrId) {
  if (!nameOrId) throw new Error('Informações inválidas');
}

function getEmployeesCoverage(objParameter) {
  const objResult = employees.map((employee) => ({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpecie(employee.responsibleFor),
    locations: getSpecieLocation(employee.responsibleFor),
  }));
  if (!objParameter) return objResult;
  if (objParameter.id) {
    const emploId = objResult.find((employee) => employee.id === objParameter.id);
    verify(emploId);// if (emploId === undefined) throw new Error('Informações inválidas');
    return emploId;
  }
  if (objParameter.name) {
    const emploName = objResult.find((employee) => employee.fullName.match(objParameter.name));// achar jeito de comparar exatamente
    verify(emploName);
    return emploName;
  } 
}

console.log(getEmployeesCoverage({ name: '' }));
module.exports = getEmployeesCoverage;
