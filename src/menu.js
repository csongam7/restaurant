//import { version } from 'html-webpack-plugin';
import * as styles from './css/menu.module.css';
import * as buttonStyle from './css/index.module.css';

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

    pizzaBtn.id = 'pizzas';
    drinkBtn.id = 'drinks';
    dessertBtn.id = 'desserts';

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
    selectTheMenu();
    function buildTheMenu(data){
        foodGrid.innerHTML = '';
        data.forEach((foodItem) => {

            console.log(foodItem.name);
            const food = document.createElement('div');
            const foodName = document.createElement('p');
            const foodImg = document.createElement('img');
            const foodPrice = document.createElement('p');
    
            foodName.innerHTML = foodItem.name;
            foodImg.src = foodItem.image;
            
            food.appendChild(foodName);
            food.appendChild(foodImg);
            if (foodItem.ingredients){
                const foodIngredients = document.createElement('p');
                foodItem.ingredients.forEach((ingredient) => {
                    foodIngredients.append(`${ingredient}, `)
                });
                    food.appendChild(foodIngredients);
                    if(foodIngredients.textContent.length > 50){
                        foodIngredients.style.fontSize = '80%';
                        foodIngredients.classList.add(styles['foodIngredients']);
                    }
            }
            food.appendChild(foodPrice);

            foodPrice.innerHTML = foodItem.price;
    
            food.classList.add(styles['food']);
            foodName.classList.add(styles['foodName']);
            foodImg.classList.add(styles['foodImg']);
            foodPrice.classList.add(styles['foodPrice'])

            
            foodGrid.appendChild(food)
        })
    }

    function selectTheMenu(food = 'pizzas'){
        const buttons = document.querySelectorAll(`.${styles['menuBtn']}`);
    buttons.forEach((button) => {if (button.id == `${food}`){
        button.classList.add(buttonStyle['active']);
    }
    else{
        button.classList.remove(buttonStyle['active']);
    }})
        let data = [];
        switch(food){
            case 'pizzas':
                data = [
                { name : 'Marinara', image: 'https://kestepizzago.com/cdn/shop/files/Marinara_800x.png?v=1684443497', ingredients : ['Tomato sauce', 'Garlic'], price : 1990},
                { name : 'Margherita', image: 'https://kestepizzago.com/cdn/shop/files/Margherita_1024x1024.png?v=1684443293', ingredients:['Tomato sauce', 'Mozzarella'], price : 1990},
                { name : '4 formaggi', image: 'https://kestepizzago.com/cdn/shop/files/QuattroFormaggiGF_800x.png?v=1684444755', ingredients:['Tomato sauce, four cheeses'], price : 2690},
                { name : 'Diavola', image: 'https://ridelli.com/wp-content/uploads/2022/03/pizza-diavola.png', ingredients : ['Tomato sauce', 'Mozzarella', 'Italian salame'], price : 2290},
                { name : 'Pepperoni', image: 'https://pizzulu.com/cdn/shop/products/IMG_7319_503x503.png?v=1642438415', ingredients : ['Tomato sauce', 'Mozzarella', 'Italian pepperoni 🌶️'], price : 2290},
                { name : 'Bufala', image: 'https://fornidinapoli.hu/wp-content/uploads/2023/09/9.png', ingredients : ['Tomato sauce', 'Italian bufala mozzarella', 'Extra virgin olive oil', 'Tomato'], price : 3190},
                { name : 'Capricciosa', image: 'https://positano.lv/wp-content/uploads/2021/12/Capricciosa-1.png', ingredients : ['Tomato sauce', 'Mozzarella', 'Olive', 'Ham', 'Mushroom', 'Artichoke', 'Tomato'], price : 3090},
                { name : '4 stagioni', image: 'https://www.pizzeriagraniantichi.it/templates/yootheme/cache/32/pizza-quattro_stagioni-320a5770.png', ingredients : ['Tomato sauce', 'Mozzarella', 'Artichoke', 'Mushroom', 'Ham', 'Basil', 'Olives'], price : 3190}],
                buildTheMenu(data);
                break;
            case 'drinks':
                data = [
                { name : 'Aperol Spritz', image: 'https://www.courvoisier.com/sites/default/files/styles/original/public/2021-12/12_Border_Spritz.png.webp?itok=1ij9qQaS', ingredients : ['Aperol', 'Prosecco', 'Soda'], price : 2790},
                { name : 'Water 0.5L', image: 'https://sophiawater.com/wp-content/uploads/2019/11/stil-500ml.png', price : 500},
                { name : 'Coca-cola 0.33 L', image:'https://www.birasprovisions.com/wp-content/uploads/2024/04/Coca-Cola-can-1.png.webp', price : 590},
                { name : 'Espresso', image:'https://www.starbucksathome.com/sg/sites/default/files/styles/nutrition_instruction_image/public/2021-04/BlackCoffee_LongShadow_0_1_0%20%281%29.png?itok=wkv8XBvk', price: 600},
                { name : 'Capuccino', image:'https://cdn.shopify.com/s/files/1/0319/0764/3436/products/traditional-cappuccino.png?v=1597269389', price: 990},
                { name:'Italian lemonade', image:'https://oakbeveragesinc.com/wp-content/uploads/2024/03/Fonti-Di-Crodo-Lemon-OAK-Beverages-Inc.webp', price: 590}];
                buildTheMenu(data);
                break;
            case 'desserts':
                data = [
                    { name : 'Tiramisu', image:'https://www.giuso.it/Media/Images/Prodotti/Gelateria/Linea_Variegati/Variegati_in_pasta/Variegato-tiramisu.png', price : 1690},
                    { name : 'Cannoli', image:'https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/spgrmvha/f71ebd17-3c5e-4176-800f-4c5f81c981c6.png', price : 1490},
                    { name : 'Bombolone', image:'https://lenalubomboloni.com/cdn/shop/files/4.png?v=1682758798', price : 1290},
                    { name : 'Profiterol', image:'https://orangecafe.hu/wp-content/uploads/2022/10/Profiterol-Nero.png', price : -1690}];
                buildTheMenu(data);
                break;
        }
    }
}