// import card styles
import './Card.css';

// Modify to accept Product object as parameter
// Modify to use Product object properties

// State management

export function Card(product) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = product.title;
    card.appendChild(cardTitle);


    const cardImage = document.createElement('img');
    cardImage.src = product.image;
    cardImage.alt = product.imageAlt;
    card.appendChild(cardImage);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = 'Card Description';
    card.appendChild(cardDescription);

    const cardPrice = document.createElement('p');
    cardPrice.textContent = `$ ${product.price}`;
    card.appendChild(cardPrice);

    const cardButton = document.createElement('button');
    cardButton.textContent = 'Add to Cart';
    card.appendChild(cardButton);

    return card;
}