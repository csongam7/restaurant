import * as styles from "./css/index.module.css";
import { homeLoader } from "./home";
import { menuLoader } from "./menu";
import { aboutLoader } from "./about";
import { contactLoader } from "./contact";

function loadPage(tab) {
    const content = document.querySelector('#content');
    content.classList = '';
    content.innerHTML = '';

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {if (button.id == `${tab}Btn`){
        button.classList.add(styles['active']);
    }
    else{
        button.classList.remove(styles['active']);
    }})
    document.querySelector('#content').addEventListener('DOMContentLoaded', () => {
        document.body.classList.add(styles['visible'])});
    switch (tab) {
        case 'home':
            homeLoader();
            break;
        case 'menu':
            menuLoader();
            break;
        case 'contact':
            contactLoader();
            break;
        case 'about':
            aboutLoader();
            break;
    }
   
    

    // Add content class using CSS module
    content.classList.add(styles['content']);
}

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');
    const homeBtn = document.getElementById('homeBtn');

    menuBtn.addEventListener('click', () => loadPage('menu'));
    aboutBtn.addEventListener('click', () => loadPage('about'));
    contactBtn.addEventListener('click', () => loadPage('contact'));
    homeBtn.addEventListener('click', () => loadPage('home'));

    loadPage('home'); // Load home by default
});
