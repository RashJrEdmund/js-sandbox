import { createNavBar } from '../../components/index.js'
createNavBar('event propagation');

const displayMessage = (message) => {
  const messageContainer = document.querySelector('.message > span');
  messageContainer.innerHTML = message;
  messageContainer.classList.add('flash');

  setTimeout(() => {
    messageContainer.classList.remove('flash');
    messageContainer.innerHTML = 'messages for propagation';
  }, 100);
}

const animateMessage = (message) => {
  const timeId = setTimeout(() => {
    displayMessage(message);
  }, 500); // 0.5s
};

const container1 = document.querySelector('.container1');
const stopBtn1 = document.querySelector('.container1 > button');

const container2 = document.querySelector('.container2');
const stopBtn2 = document.querySelector('.container2 > button');

const container3 = document.querySelector('.container3');
const stopBtn3 = document.querySelector('.container3 > button');

stopBtn1.addEventListener('click', () => {
  displayMessage('clicked me');
});

container1.addEventListener('click', () => {
  animateMessage('click 1');
}, true); // meaning no capture hence bubble.

// CONTAINER 2
container2.addEventListener('click', () => {
  animateMessage('click 2');
}, true);

// CONTAINER 3
container3.addEventListener('click', () => {
  animateMessage('click 3');
}, true);
