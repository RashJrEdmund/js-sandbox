import { createNavBar } from "../../components/index.js"
createNavBar("range selector")

const showRange = ({ target: { value } }) => {
    document.querySelector('.range').innerHTML = value
}

document.getElementById("range-selector").oninput = (el) => showRange(el)
