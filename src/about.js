import * as styles from './css/about.module.css'
import csongam7 from './assets/images/csongam7.png'

export function aboutLoader(){

    //build up the site
    const content = document.querySelector('#content');
    
    const mainContainer = document.createElement('div');
    const chef = document.createElement('img');
    const sideContainer = document.createElement('div');
    const topContainer = document.createElement('div');
    const middleContainer = document.createElement('div');
    const lowerContainer = document.createElement('div');

    chef.src = csongam7;

    mainContainer.appendChild(chef);
    sideContainer.appendChild(topContainer);
    sideContainer.appendChild(middleContainer);
    sideContainer.appendChild(lowerContainer);
    mainContainer.appendChild(sideContainer);
    content.appendChild(mainContainer);

    chef.classList.add(styles['chef']);
}