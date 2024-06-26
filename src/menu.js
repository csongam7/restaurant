//import { version } from 'html-webpack-plugin';
import * as styles from './css/menu.module.css';

export function menuLoader(){


    const menuContainer = document.createElement('div');
    menuContainer.classList = (styles['container']);
    const foodGrid = document.createElement('div');
    foodGrid.classList = styles['foodGrid'];
    
    //this is the container of the buttons
    const menuNavigationContainer = document.createElement('div');
    const title = document.createElement('p');
    title.innerHTML = "Menu";
    menuNavigationContainer.classList.add(styles['menuNavigationContainer']);
    
    //create menu buttons
    const pizzaBtn = document.createElement('button');
    const drinkBtn = document.createElement('button');
    const dessertBtn = document.createElement('button');

    pizzaBtn.innerText = "Pizzas";
    drinkBtn.innerText = "Drinks"
    dessertBtn.innerText = "Desserts"

    //add styling to the buttons
    pizzaBtn.classList.add(styles['menuBtn']);
    drinkBtn.classList.add(styles['menuBtn']);
    dessertBtn.classList.add(styles['menuBtn']);

    //add buttons to the container
    menuNavigationContainer.appendChild(pizzaBtn);
    menuNavigationContainer.appendChild(drinkBtn);
    menuNavigationContainer.appendChild(dessertBtn);

    menuContainer.appendChild(menuNavigationContainer);
    menuContainer.appendChild(foodGrid);

    document.querySelector('#content').appendChild(menuContainer);
    document.querySelector('#content').classList.add(styles['menuContent']);

    pizzaBtn.addEventListener('click', () => selectTheMenu('pizzas'));
    drinkBtn.addEventListener('click', () => selectTheMenu('drinks'));
    dessertBtn.addEventListener('click', () =>  selectTheMenu('desserts'));

    function buildTheMenu(data){
        foodGrid.innerHTML = '';
        data.forEach((foodItem) => {

            console.log(foodItem.name);
            const food = document.createElement('div');
            const foodName = document.createElement('p');
            const foodImg = document.createElement('img');
            const foodIngredients = document.createElement('ul');
            const foodPrice = document.createElement('p');
    
            foodName.innerHTML = foodItem.name;
            foodImg.src = foodItem.image;
            foodItem.ingredients.forEach((ingredient) => {
                const listItem = document.createElement('li');
                listItem.innerHTML = ingredient;
                foodIngredients.appendChild(listItem)});
            foodPrice.innerHTML = foodItem.price;
    
            food.classList.add(styles['food']);
            foodName.classList.add(styles['foodName']);
            foodImg.classList.add(styles['foodImg']);
            foodIngredients.classList.add(styles['foodIngredients']);
            foodPrice.classList.add(styles['foodPrice'])
    
            food.appendChild(foodName);
            food.appendChild(foodImg);
            food.appendChild(foodIngredients);
            food.appendChild(foodPrice);
            foodGrid.appendChild(food)
        })
    }

    function selectTheMenu(food){
        let data = [];
        switch(food){
            case 'pizzas':
                data = [
                { name : 'Marinara', image: 'https://kestepizzago.com/cdn/shop/files/Marinara_800x.png?v=1684443497', ingredients : ['Tomato sauce', 'Garlic'], price : 1990},
                { name : 'Margherita', image: 'https://kestepizzago.com/cdn/shop/files/Margherita_1024x1024.png?v=1684443293', ingredients:['Tomato sauce', 'Mozzarella'], price : -1990},
                { name : '4 formaggi', image: 'https://kestepizzago.com/cdn/shop/files/QuattroFormaggiGF_800x.png?v=1684444755', ingredients:['Tomato sauce, four cheeses'], price : -2690},
                { name : 'Diavola', image: 'https://ridelli.com/wp-content/uploads/2022/03/pizza-diavola.png', ingredients : ['Tomato sauce', 'Mozzarella', 'Italian salame'], price : -2290},
                { name : 'Pepperoni', image: 'https://pizzulu.com/cdn/shop/products/IMG_7319_503x503.png?v=1642438415', ingredients : ['Tomato sauce', 'Mozzarella', 'Italian pepperoni 🌶️'], price : -2290},
                { name : 'Bufala', image: 'https://fornidinapoli.hu/wp-content/uploads/2023/09/9.png', ingredients : ['Tomato sauce', 'Italian bufala mozzarella', 'Extra virgin olive oil', 'Tomato'], price : -3190},
                { name : 'Capricciosa', image: 'https://positano.lv/wp-content/uploads/2021/12/Capricciosa-1.png', ingredients : ['Tomato sauce', 'Mozzarella', 'Olive', 'Ham', 'Mushroom', 'Artichoke', 'Tomato'], price : -3090},
                { name : '4 stagioni', image: 'https://www.pizzeriagraniantichi.it/templates/yootheme/cache/32/pizza-quattro_stagioni-320a5770.png', ingredients : ['Tomato sauce', 'Mozzarella', 'Artichoke', 'Mushroom', 'Ham', 'Basil', 'Olives'], price : -3190}],
                buildTheMenu(data);
                break;
            case 'drinks':
                data = [
                { name : 'Aperol Spritz', ingredients : ['Aperol', 'Prosecco', 'Soda'], price : 2790},
                { name : 'Water 0.5L', ingredients:['100% Water :D'], price : 500},
                { name : 'Coca-cola 0.33 L', ingredients:['100% Cola :D'], price : 790},
                { name : 'Espresso', ingredients:['Coffee'], price: 600},
                { name : 'Capuccino', ingredients:['Coffee', 'Milk'], price: 990}];
                buildTheMenu(data);
                break;
            case 'desserts':
                data = [
                    { name : 'Tiramisu', image:'', price : 1990},
                    { name : 'Cannoli', image:'', price : 1990},
                    { name : 'Bomboloni', image:'', price : 2690},
                    { name : 'Profiterol', image:'', price : 1000}];
                buildTheMenu(data);
                break;
        }
    }
}