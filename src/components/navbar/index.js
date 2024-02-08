import { PATHS } from '../../constants/nav-constants.js';

const NAV_ROUTES = [
    { folder_name: './', name: 'Home' },
    ...PATHS
];

const createNavBar = (currentRoute) => {
    console.log('creating navbar')

    const nav_bar = document.getElementById('nav')
    nav_bar.style = 'display: flex; gap: 20px; margin: 10px 0 3rem;'

    NAV_ROUTES.forEach(({ folder_name, name }) => {
        const a_tag = document.createElement('a');

        a_tag.innerHTML = name;

        a_tag.style = 'color: #1e91d8;'

        nav_bar.appendChild(a_tag)

        if (name === currentRoute) {
            a_tag.style = 'color: green; border-bottom: 1px solid green';
            return; // to color only it's route
        }

        if (name === 'Home') {
            a_tag.href = '../../../'; // path to home/index page.
        } else {
            const link = '../' + folder_name + '/index.html';

            a_tag.href = link;
        }
    })
}

export default createNavBar;
