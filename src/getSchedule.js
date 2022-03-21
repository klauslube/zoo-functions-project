const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// preciso name: animal , availability de cada animal e  hours : { days { open: close}
// para cada dia mostrar a hours de open e close , animais do dia
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const days = hours;
    

  }
}

console.log(getSchedule());
module.exports = getSchedule;
