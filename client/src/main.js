import './style.css';
import { Header } from './components/Header.js';
import { Card } from './components/Card.js';
import { ShoppingCart } from './components/ShoppingCart.js';

const app = document.querySelector('#app');

// Create and add header
const header = Header();
app.appendChild(header);

// Sample product data
const products = [
    { id: 1, title: 'Bubble Broz 1', price: 9.99, image: 'https://picsum.photos/260?random=1', imageAlt: 'Bubble Broz' },
    { id: 2, title: 'Bubble Broz 2', price: 8.99, image: 'https://picsum.photos/260?random=2', imageAlt: 'Bubble Broz' },
    { id: 3, title: 'Bubble Broz 3', price: 7.99, image: 'https://picsum.photos/260?random=3', imageAlt: 'Bubble Broz' },
    { id: 4, title: 'Bubble Broz 4', price: 6.99, image: 'https://picsum.photos/260?random=4', imageAlt: 'Bubble Broz' },
    { id: 5, title: 'Bubble Broz 5', price: 19.99, image: 'https://picsum.photos/260?random=5', imageAlt: 'Bubble Broz' },
    { id: 6, title: 'Bubble Broz 5', price: 19.99, image: 'https://picsum.photos/260?random=6', imageAlt: 'Bubble Broz' },
    { id: 7, title: 'Bubble Broz 5', price: 19.99, image: 'https://picsum.photos/260?random=7', imageAlt: 'Bubble Broz' },
    { id: 8, title: 'Bubble Broz 5', price: 19.99, image: 'https://picsum.photos/260?random=8', imageAlt: 'Bubble Broz' },
];
console.log(products)

// Create container for cards
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
app.appendChild(cardContainer);


// Create and add cards with product data, 
products.forEach((product) => {
    const card = Card(product, shoppingCart);
    cardContainer.appendChild(card);
});

// Create and add shopping cart
const shoppingCart = ShoppingCart();
app.appendChild(shoppingCart);