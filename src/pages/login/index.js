import { createNavBar } from "../../components/index.js"
createNavBar("login form");


const addStyle = (id, attri, sty) => {
    document.getElementById(id).style[attri] = sty;
};

const removeStyle = (id, attri) => {
    document.getElementById(id).style[attri] = 'unset';
};

const clearMessage = async () =>
    setTimeout(() => (document.querySelector("p").innerHTML = ""), 3000);

const handleForm = async () => {
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const message = document.querySelector("p");

    if (!name || !password) {
        message.innerHTML = "input all fields";
        clearMessage();
        return;
    } else {
        // const myRegex = /([0-9])\w+([@.$#!%^&*()\[\]{};:'",<.>/?\\|~`_])/g
        const myRegex = /[@.$#!%^&*()\[\]{};:'",<.>/?\\|~`_][a-z]/g;
        if (password.length < 8) {
            message.innerHTML = "password must be atleast 8 characters";
            clearMessage();
            return;
        } else if (!myRegex.test(password)) {
            message.innerHTML =
                "password must contain a special character or number";
            clearMessage();
            return;
        }

        message.innerHTML = "form Validated";

        await clearMessage().then(() =>
            setTimeout(() => (message.innerHTML = "Logging in..."), 3000)
        );
    }
};

const login_btn = document.getElementById("loginbtn");
login_btn.onclick = handleForm;

login_btn.onmouseover = addStyle('loginbtn', 'backgroundColor', 'gold');
login_btn.onmouseout = removeStyle('loginbtn', 'backgroundColor');
