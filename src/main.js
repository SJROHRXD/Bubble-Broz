import './style.css';
import { Header } from './components/Header.js';
import { Card } from './components/Card.js';

const app = document.querySelector('#app');

// Create and add header
const header = Header();
app.appendChild(header);

// Sample product data
const products = [
    { id: 1, name: 'Bubble Broz', price: 9.99, image: 'https://picsum.photos/200' },
    { id: 2, name: 'Bubble Broz', price: 9.99, image: 'https://picsum.photos/200' },
    { id: 3, name: 'Bubble Broz', price: 9.99, image: 'https://picsum.photos/200' },
    { id: 4, name: 'Bubble Broz', price: 9.99, image: 'https://picsum.photos/200' },
    { id: 5, name: 'Bubble Broz', price: 9.99, image: 'https://picsum.photos/200' },
];

// Create container for cards
const cardContainer = document.createElement('div');
cardContainer.classList.add('card-container');
app.appendChild('cardContainer');

products.forEach((product) => {
    const card = Card(product);
    cardContainer.appendChild(card);
});
