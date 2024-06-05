import { homeLoader } from "./home.js";
import { menuLoader } from "./menu.js";
import { contactLoader } from "./contact";
import { aboutLoader } from "./about";
import styles from './css/menu.module.css';

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

function clearContent(){
    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
}

const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');
const contactBtn = document.getElementById('contactBtn');
const homeBtn = document.getElementById('homeBtn');

menuBtn.addEventListener('click', () => clearContent(), loadPage('menu'));
aboutBtn.addEventListener('click', () => clearContent(), loadPage('about'));
contactBtn.addEventListener('click', () => clearContent(), loadPage('contact'));
homeBtn.addEventListener('click', () => clearContent(), loadPage('home'));


loadPage('home');