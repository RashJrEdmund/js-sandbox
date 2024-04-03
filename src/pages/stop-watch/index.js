import { createNavBar } from '../../components/index.js';
createNavBar('stop watch');

const ui = {
  display: {
    hrs: document.querySelector('.hours'),
    mins: document.querySelector('.minutes'),
    secs: document.querySelector('.seconds'),
    milliseconds: document.querySelector('.milliseconds'),
  },

  btns: {
    start: document.getElementById('start'),
    stop: document.getElementById('stop'),
    clear: document.getElementById('clear')
  }
};

const time = {
  hours: 0,
  mins: 0,
  secs: 0,
  milliseconds: 1,
}

let timeInterval;

const formatDisplayValue = (value, isMilliSeconds = false) => {
  if (value >= 10) return value
  return '0' + value; // to ensure the 01, 02, 03 formatting;
}

ui.btns.start.addEventListener('click', (e) => {
  if (timeInterval) return; // meaning clock running already;

  timeInterval = setInterval(() => {
    if (time.mins >= 60) {
      console.log(time);
      time.hours = (time.hours + 1) % 13;
      ui.display.hrs.innerHTML = formatDisplayValue(time.hours);
      time.mins = 0; // necessary bcs time.mins will remain 60 till time.secs reaches another 60 seconds ie 1 min.
    }

    if (time.secs >= 60) {
      time.mins = (time.mins + 1) % 61;
      ui.display.mins.innerHTML = formatDisplayValue(time.mins === 60 ? 0 : time.mins);
      time.secs = 0;
    }

    if (time.milliseconds >= 100) {
      time.secs = (time.secs + 1) % 61;
      ui.display.secs.innerHTML = formatDisplayValue(time.secs === 60 ? 0 : time.secs);
      time.milliseconds = 0;
    }

    time.milliseconds = (time.milliseconds + 1) % 101;
    ui.display.milliseconds.innerHTML = formatDisplayValue(time.milliseconds === 100 ? 0 : time.milliseconds);
  }, 10);
}, null);

ui.btns.stop.addEventListener('click', (e) => {
  clearInterval(timeInterval);
  timeInterval = undefined;
}, null);

ui.btns.clear.addEventListener('click', () => {
  clearInterval(timeInterval);
  timeInterval = undefined;

  Object.keys(time).forEach(key => {
    time[key] = 0;
  });

  Object.values(ui.display).forEach(node => {
    node.innerHTML = '00';
  });
});
