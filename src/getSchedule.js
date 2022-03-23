// const { hours, species } = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// preciso name: animal , availability de cada animal e  hours : { days { open: close}
// // para cada dia mostrar a hours de open e close , animais do dia

const days = Object.keys(hours);

function availability(day) {
  const specieAva = species.filter((specie) => specie.availability.includes(day));
  return specieAva.map((specie) => specie.name);
}

function objDays(schedule) {
  const sched = schedule;
  days.forEach((day) => {
    sched[day] = {
      officeHour: hours[day].open !== 0
        ? `Open from ${hours[day].open}am until ${hours[day].close}pm` : 'CLOSED',
      exhibition: hours[day].open !== 0 ? availability(day) : 'The zoo will be closed!',
    };
  });
}

function getSchedule(scheduleTarget) {
  const animalsName = species.map((specie) => specie.name);
  const obj = {};
  objDays(obj);
  if (days.includes(scheduleTarget)) return { [scheduleTarget]: obj[scheduleTarget] };
  if (animalsName.includes(scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  return obj;
}

console.log(getSchedule());
module.exports = getSchedule;
