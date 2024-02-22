import { createNavBar } from '../../components/index.js'
createNavBar('event propagation');

const container1 = document.querySelector('.container1');

const container2 = document.querySelector('.container2');

const container3 = document.querySelector('.container3');

// CONTAINER 1
container1.addEventListener('click', (e) => {
  console.log('captured 1');
}, true); // meaning capture

container1.addEventListener('click', (e) => {
  console.log('bubbled 1');
}, false); // meaning no capture hence bubble.

// CONTAINER 2
container2.addEventListener('click', (e) => {
  // e.stopPropagation();
  console.log('captured 2');
}, true);

container2.addEventListener('click', (e) => {
  console.log('bubbled 2');
}, false);

// CONTAINER 3
container3.addEventListener('click', (e) => {
  console.log('captured 3');
}, true);

container3.addEventListener('click', (e) => {
  console.log('bubbled 3');
}, false);
