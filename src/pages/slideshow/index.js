import { createNavBar } from '../../components/index.js'
createNavBar('slide show');

const slideContainer = document.querySelector('#slide-container');
const indxCounter = document.querySelector('#indxCounter');
const image = document.querySelector('#img');
const imageList = [
    './images/yello ford ranger.jpeg',
    './images/2023 ford mustang.jpeg',
    './images/2017 ford mustang.jpeg',
    './images/ford bronco rapto.jpeg',
    './images/ford mustang GT.jpeg',
    './images/ford SUVs.jpeg',
    './images/Lamborghini Aventador .jpeg',
    './images/lamborghini murcielago.jpeg'
];

let intervalId;

const replaceImage = () => {
    let ind = 0;

    intervalId = setInterval(() => {
        ind = (ind === imageList.length - 1) ? 0 : ind + 1;
        image.src = imageList[ind];
        // slideContainer.style.backgroundImage = `url('${imageList[ind - 1]}')`;

        indxCounter.innerHTML = ind;
    }, 2000);
}

const stopSlide = () => {
    console.log('stopping slide', intervalId);
    clearInterval(intervalId)
}

document.getElementById('start').onclick = () => replaceImage()

document.getElementById('stop').onclick = () => stopSlide()
