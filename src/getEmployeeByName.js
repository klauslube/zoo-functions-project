const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return employees.find((fir) => fir.firstName === employeeName || fir.lastName === employeeName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
