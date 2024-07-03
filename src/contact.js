import * as styles from './css/contact.module.css'

export function contactLoader(){
    const content = document.querySelector('#content');
    const bigText = document.createElement('h2');
    const container = document.createElement('div');
    const telephone = document.createElement('a');
    const email = document.createElement('p');
    const location = document.createElement('p');
    
    bigText.innerHTML = 'Contact us!';
    email.innerHTML = 'email@pizzaplace.com'
    telephone.href = 'tel:+36102030405';
    telephone.innerHTML = '📞 +36 (10) 2030405';
    location.innerHTML = '📍Some random garage'
    
    content.appendChild(bigText);
    container.appendChild(telephone);
    container.appendChild(email);
    container.appendChild(location);
    content.appendChild(container);

    content.className = styles['content'];
    bigText.className = styles['bigText'];
    container.className = styles['container'];
    telephone.className = styles['info'];
    location.className = styles['info'];
    email.className = styles['info'];

}