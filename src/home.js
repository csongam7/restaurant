import './css/index.module.css';

export function homeLoader(){
    const restaurantName = document.createElement('p');
    restaurantName.innerHTML = "Pizzeria Napoletana";

    const restaurantSquote = document.createElement('p');
    restaurantSquote.innerHTML = "Take a bite of Napoli!";

    const maradona = document.createElement('img');
    maradona.src = ('/assets/images/maradona.png')

    document.querySelector('#content').appendChild(restaurantName);
    document.querySelector('#content').appendChild(restaurantSquote);
}