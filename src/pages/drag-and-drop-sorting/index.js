import { createNavBar } from '../../components/index.js'

createNavBar('drag and drop sorting');

// web dev simplified video
// https://www.youtube.com/watch?v=jfYWwQrtzzY

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
    const afterElemnt = getDragAfterElement(container, e.clientY);

    const currentDraggable = document.querySelector('.dragging'); // current element beign dragged;

    if (!afterElemnt) {
      // means we're above nothing and should be to the bottom of container.
      container.appendChild(currentDraggable);
    } else {
      container.insertBefore(currentDraggable, afterElemnt);
    }
  });

  container.addEventListener('drop', (e) => {
    e.preventDefault();
  });

  // container.addEventListener('drop', (e) => {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files
  //   console.log('dropeed', e, files);
  // });
});

function getDragAfterElement(container, y) {
  /* FUNC_DESC +=> ================================
  | Will return the element our mouse position is |
  | directly right after                          |
  ===================================//==========*/

  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();

    const offset = y - box.top - box.height / 2;

    // looking for an offset < 0 but as closest to zero as possible.

    if (offset < 0 && offset > closest.offset) {
      return {
        offset: offset,
        element: child,
      }
    } else {
      return closest// is an object { offset: number, element: NodeElement | undefined }
    }
  }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
};
