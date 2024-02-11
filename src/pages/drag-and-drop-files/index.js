import { createNavBar } from '../../components/index.js'
import { wait } from '../../utils/utils.js';
import { isDirectory, isFile } from './files.service.js';
import { FILE_TYPES, ICON_OBJECT } from './files.constants.js';

createNavBar('drag and drop files');

const dropBox = document.querySelector('.drop-box');
const fileDisplayContainer = document.querySelector('.file-display');

dropBox.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropBox.addEventListener('drop', async (e) => {
  e.preventDefault();

  const files = e.dataTransfer.files;

  const items = e.dataTransfer.items;

  // console.log(e.dataTransfer);

  const dropText = dropBox.querySelector('.drop-text');

  dropText.innerHTML = `uploading ${files.length} file${files.length > 1 ? 's' : ''}`;

  for (let i = 0; i < files.length; i++) {
    console.log('file', files[i]);
    console.log('tiem', items[i]);
    // console.log('is directory', isDirectory(items[i]));
    // console.log('is File', isFile(items[i]));
    console.log('webkit entry', items[i].webkitGetAsEntry());
  };

  // await wait(1500);

  for (let i = 0; i < files.length; i++) {
    // console.log(items[i]);
    computeFile(e, files[i], items[i]);
  }

  dropText.innerHTML = 'Drop file(s) here';
});

const computeFile = (e, file, item) => {
  const img = document.createElement('img');

  // console.log('item', item);

  if (isDirectory(item)) {
    img.src = ICON_OBJECT.folder;
  } else if (file.type.startsWith(FILE_TYPES.image)) {
    img.src = URL.createObjectURL(file);

    img.onerror = (e) => {
      // console.warn(e);

      img.src = ICON_OBJECT.img_error;
    };
  } else if (file.type.startsWith(FILE_TYPES.video)) {
    console.log('this is a video');

    img.src = ICON_OBJECT.video;
  } else if (file.type.startsWith(FILE_TYPES.application) || !file.type) {
    console.log('this is an application');

    img.src = ICON_OBJECT.file;
  } else {
    img.src = ICON_OBJECT.file;
    e.preventDefault();
  };

  displayFileFigure(file, img);
};

const displayFileFigure = (file, img) => {
  const figure = document.createElement('figure');

  const figCaption = document.createElement('figcaption');

  figCaption.innerHTML = file.name || '';

  figCaption.title = file.name || '';

  figure.appendChild(img);

  figure.appendChild(figCaption);

  fileDisplayContainer.appendChild(figure);
};
