const createNavBar = (exception) => {
    console.log("creating navbar")

    const nav_bar = document.getElementById("nav")

    const NAV_ROUTES = [
        { link: "../../../index/index.html", name: "Home" },
        { link: "../slideshow/index.html", name: "slide show" },
        { link: "../color-picker/index.html", name: "color picker" },
        { link: "../rangeSelector/index.html", name: "range selector" },
        { link: "../login/index.html", name: "login form" },
        { link: "../intersection-observer/index.html", name: "intersection observer" },
    ];

    NAV_ROUTES.forEach(({ link, name }) => {
        const a_tag = document.createElement("a");

        a_tag.innerHTML = name

        nav_bar.appendChild(a_tag)

        if (name === exception) {
            a_tag.style = "color: green; border-bottom: 1px solid green";
            return; // to color only it's route
        }


        a_tag.href = link;
    })
}

export default createNavBar;
