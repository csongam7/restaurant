import * as styles from "./css/index.module.css";
import { homeLoader } from "./home";
import { menuLoader } from "./menu";

function loadPage(tab) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {if (button.id == `${tab}Btn`){
        button.classList.add(styles['active']);
    }
    else{
        button.classList.remove(styles['active']);
    }})

    switch (tab) {
        case 'home':
            homeLoader();
            break;
        case 'menu':
            menuLoader();
            break;/*
        case 'contact':
            contactLoader();
            break;
        case 'about':
            aboutLoader();
            break;*/
    }

   
    

    // Add content class using CSS module
    content.classList.add(styles['content']);

    // Example of adding content dynamically
    const pizzaPlaceName = document.createElement('div');
    pizzaPlaceName.textContent = "Pizza is the perfect food because it's the only food that you can eat with your hands and still look classy."; // Use textContent for text
    content.appendChild(pizzaPlaceName);
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
