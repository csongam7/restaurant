export function initialLoading(){
    let homeButton = document.createElement('button')
homeButton.innerHTML = "Home";

let aboutButton = document.createElement('button')
homeButton.innerHTML = "About";

let menuButton = document.createElement('button')
homeButton.innerHTML = "Menu";

let restaurantName = document.createElement('p');
restaurantName.innerHTML = "Pizzeria Napoletana";

let restaurantSquote = document.createElement('p');
restaurantSquote.innerHTML = "Take a bite of Napoli!";

document.querySelector('nav').appendChild(homeButton);
document.querySelector('nav').appendChild(menuButton);
document.querySelector('nav').appendChild(aboutButton);
document.querySelector('#content').appendChild(restaurantName);
document.querySelector('#content').appendChild(restaurantSquote);
}