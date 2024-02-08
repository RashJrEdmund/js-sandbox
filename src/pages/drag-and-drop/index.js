import { createNavBar } from '../../components/index.js'

createNavBar('drag and drop');

const containers = document.querySelectorAll('.container');
const draggables = document.querySelectorAll('.draggable');

draggables.forEach((draggable) => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging'); // to show what was beign dragged
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging'); //
  });
});

containers.forEach((container) => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.clear();
    console.log('dragging over', e);
  });

  container.addEventListener('drop', (e) => {
    e.preventDefault();
  })
});
