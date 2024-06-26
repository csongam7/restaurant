import * as styles from './css/home.module.css'
export function homeLoader(){
    const content = document.querySelector('#content')
    const pizzaQuote = document.createElement('div');
    pizzaQuote.classList.add(styles['pizzaQuote']);
    pizzaQuote.textContent = "Pizza is the perfect food because it's the only food that you can eat with your hands and still look classy."; // Use textContent for text// Example of adding content dynamically
    content.classList = styles['content'];
    content.appendChild(pizzaQuote);
}