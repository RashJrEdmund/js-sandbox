import { createNavBar } from "../../components/index.js"

createNavBar("color picker");

const picker = document.getElementById("picker")
const hex = document.querySelector('.hex-code');

const changeColor = () => {
    console.log('color changing')
    hex.value = picker.value;
    document.querySelector('.out-put').style.backgroundColor = picker.value;
}

picker.oninput = changeColor
