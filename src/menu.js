import styles from './css/menu.module.css';

export function menuLoader(){

    const content = document.getElementById('content');

    const pizzasDetails = [
    {name: "pepperoni", ingredients: ["Tomato souce", "Cheese", "Pepperoni"], price: 2500, imgSrc : "../assets/images/pizzas/pepperoni.png"},
    {name: "pepperoni", ingredients: ["Tomato souce", "Cheese", "Pepperoni"], price: 2500, imgSrc : "../assets/images/pizzas/pepperoni.png"},
    {name: "pepperoni", ingredients: ["Tomato souce", "Cheese", "Pepperoni"], price: 2500, imgSrc : "../assets/images/pizzas/pepperoni.png"},
    {name: "pepperoni", ingredients: ["Tomato souce", "Cheese", "Pepperoni"], price: 2500, imgSrc : "../assets/images/pizzas/pepperoni.png"},
    {name: "pepperoni", ingredients: ["Tomato souce", "Cheese", "Pepperoni"], price: 2500, imgSrc : "../assets/images/pizzas/pepperoni.png"},
    {name: "pepperoni", ingredients: ["Tomato souce", "Cheese", "Pepperoni"], price: 2500, imgSrc : "../assets/images/pizzas/pepperoni.png"},
    {name: "pepperoni", ingredients: ["Tomato souce", "Cheese", "Pepperoni"], price: 2500, imgSrc : "../assets/images/pizzas/pepperoni.png"}
    ]

    const pizzas = document.createElement("ul");
    pizzas.id = "pizzas";

    for (let i = 0; i < pizzasDetails.length-1; i++){

        //creating dom elements
        const pizza = document.createElement('div');
        const pizzaName = document.createElement('p');
        const ingredients = document.createElement('ul');
        const pizzaImg = document.createElement('img');
        const price = document.createElement('p');

        //adding texts
        pizzaName.innerHTML = pizzasDetails[i].name;
        for(let ingredient of pizzasDetails[i].ingredients){
            const ingredientOnPage = document.createElement('li');
            ingredientOnPage.innerHTML = ingredient;
            ingredients.appendChild(ingredientOnPage);
        }
        pizzaImg.src = pizzasDetails[i].imgSrc;
        price.innerHTML = pizzasDetails[i].price; 

        //appending dom elements with children
        pizza.appendChild(pizzaName);
        pizza.appendChild(pizzaImg);
        pizza.appendChild(ingredients);
        pizza.appendChild(price);
        pizzas.appendChild(pizza);

        //adding styling to them
        pizzas.id = 'pizzas';
        pizza.classList.add = 'pizza';
        pizzaImg.classList.add('pizza-img');
        pizzaName.classList.add('pizza-name');
        price.classList.add('price');
    }
    content.appendChild(pizzas);
}