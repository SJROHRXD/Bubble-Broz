import './style.css';
import { Header } from './components/Header.js';
import { Card } from './components/Card.js';

const app = document.querySelector('#app');

// Create and add header
const header = Header();
app.appendChild(header);

// Create and add card
const card = Card();
app.appendChild(card);
