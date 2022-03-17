const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const filter = employees.flatMap((man) => man.managers);
  // console.log(filter);
  return filter.some((idMan) => idMan === id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managerEmployees = employees.filter((employee) => employee.managers.includes(managerId))
    .map((names) => names.firstName.concat(` ${names.lastName}`));
  return managerEmployees;
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
