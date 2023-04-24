// import card styles
import './Card.css';

export function Card() {
    const card = document.createElement('div');
    // Add your card elements and logic here
    card.classList.add('card');
    card.innerHTML = `Card`

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = 'Card Title';
    card.appendChild(cardTitle);


    const cardImage = document.createElement('img');
    cardImage.src = 'https://picsum.photos/200';
    cardImage.alt = 'Card Image';
    card.appendChild(cardImage);

    const cardDescription = document.createElement('p');
    cardDescription.textContent = 'Card Description';
    card.appendChild(cardDescription);

    const cardPrice = document.createElement('p');
    cardPrice.textContent = `$9.99`;
    card.appendChild(cardPrice);

    const cardButton = document.createElement('button');
    cardButton.textContent = 'Add to Cart';
    card.appendChild(cardButton);

    return card;
}