const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const childs = entrants.filter((ch) => ch.age < 18);
  const adult = entrants.filter((adu) => adu.age >= 18 && adu.age < 50);
  const senior = entrants.filter((sen) => sen.age >= 50);
  // const obj = { childs: childs.length, adult: adult.length, senior: senior.length };
  const obj = { adult: adult.length, child: childs.length, senior: senior.length };
  return obj;
}
function calculateEntry(entrants) {
  if (!entrants) return 0;
  if (Object.keys(entrants).length === 0) return 0;
  const count = countEntrants(entrants);
  const priceAdult = count.adult * prices.adult;
  const priceChild = count.child * prices.child;
  const priceSenior = count.senior * prices.senior;
  const priceTotal = priceAdult + priceChild + priceSenior;
  return priceTotal;
}
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
console.log(calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]));
module.exports = { calculateEntry, countEntrants };
