import * as styles from './css/about.module.css'
import csongam7 from './assets/images/csongam7.png'

export function aboutLoader(){

    //build up the site
    const content = document.querySelector('#content');

    
    const mainContainer = document.createElement('div');
    const imageContainer = document.createElement('div');
    const chef = document.createElement('img');
    const chefName = document.createElement('p')
    const sideContainer = document.createElement('div');
    const topContainer = document.createElement('div');
    const middleContainer = document.createElement('div');
    const lowerContainer = document.createElement('div');

    chef.src = csongam7;
    chefName.innerHTML = 'csongam7';

    imageContainer.appendChild(chefName);
    imageContainer.appendChild(chef);
    mainContainer.appendChild(imageContainer);
    sideContainer.appendChild(topContainer);
    sideContainer.appendChild(middleContainer);
    sideContainer.appendChild(lowerContainer);
    mainContainer.appendChild(sideContainer);
    content.appendChild(mainContainer);

    topContainer.innerHTML = "I started my business in 2021 during the pandemic because I needed money. I wasn't sure what I'm gonna do, but I knew that I want to do something that is morally questionable. One evening when I was having froozen pizza for dinner it just clicked in - &quot I'll sell frozen pizzas to people and claim it to be pure italian handmade pizza! &quot - I thought"
    middleContainer.innerHTML = "I started my company from a garage, but once the owner noticed me, I had to fing a new garage to keep providing delicious pizzas to my customers. After years of hard work, I decided that I want to make a big step and rent a garage to cook the pizzas."
    lowerContainer.innerHTML = "I don't really know what to write here, but when I made a plan of how the about me side would look like, I wanted 3 seperate info modules on the right, so I will fill the last one up with this text. Let's go!"

    chefName.classList.add(styles['chefName']);
    imageContainer.classList.add(styles['imageContainer']);
    chef.classList.add(styles['chef']);
    sideContainer.classList.add(styles['sideContainer']);
    content.classList = styles['content'];
    mainContainer.classList.add(styles['mainContainer']);
    document.querySelector('header').classList.add(styles['aboutBackground']);
    topContainer.classList.add(styles['infoContainer']);
    middleContainer.classList.add(styles['infoContainer']);
    lowerContainer.classList.add(styles['infoContainer']);
}