import { homeLoader } from "./home.js";
import { menuLoader } from "./menu.js";
import { contactLoader } from "./contact.js";
import { aboutLoader } from "./about.js";
import * as styles from './css/index.module.css';

function loadPage(tab){
    content.innerHTML = '';
    switch(tab){
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
}

document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    content.classList.add(styles['content']);
});

const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const homeBtn = document.getElementById('homeBtn');

menuBtn.addEventListener('click', () => loadPage('menu'));
aboutBtn.addEventListener('click', () => loadPage('about'));
contactBtn.addEventListener('click', () => loadPage('contact'));
homeBtn.addEventListener('click', () => loadPage('home'));


loadPage('home');