import { createNavBar } from '../../components/index.js'
import { wait } from '../../utils/utils.js';

createNavBar('drag and drop files');

const dropBox = document.querySelector('.drop-box');
const fileDisplayContainer = document.querySelector('.file-display');

const ICON_OBJECT = {
  img_error: 'https://community.atlassian.com/t5/image/serverpage/image-id/157040i289B328EEF18671A/image-size/large?v=v2&px=999',
  video: 'https://t4.ftcdn.net/jpg/02/65/84/77/360_F_265847744_xfvDgrqK0pPApYI7JKse0NIHImnivkCi.jpg',
  application: 'https://learn.microsoft.com/en-us/windows/apps/design/signature-experiences/images/iconography_anatomy1.svg',
}

const FILE_TYPES = {
  image: 'image',
  video: 'video',
  application: 'application',
};

dropBox.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropBox.addEventListener('drop', async (e) => {
  e.preventDefault();
  
  const files = e.dataTransfer.files;

  const loading = dropBox.querySelector('span');

  loading.innerHTML = `uploading ${files.length} file${files.length > 1 ? 's': ''}`;

  await wait(1500);

  for (let i = 0; i < files.length; i++) {
    displayFile(files[i], e);
  }

  loading.innerHTML = '';
});

const displayFile = (file, e) => {
  const img = document.createElement('img');

  if (file.type.startsWith(FILE_TYPES.image)) {
    img.src = URL.createObjectURL(file);

    img.onerror =  (e) => {
      // console.warn(e);

      img.src = ICON_OBJECT.img_error;
    };
  } else if (file.type.startsWith(FILE_TYPES.video)) {
    console.log('this is a video');

    img.src = ICON_OBJECT.video;
  } else if (file.type.startsWith(FILE_TYPES.application) || !file.type) {
    console.log('this is an application');

    img.src = ICON_OBJECT.application;
  } else {
    e.preventDefault();
  };

  fileDisplayContainer.appendChild(img);
};
