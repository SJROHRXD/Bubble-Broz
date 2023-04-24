import './Card.css';

// State management

export function Card(product, shoppingCart) {
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
    cardButton.addEventListener('click', () => {
        shoppingCart.addItem(product);
        // shoppingCart.style.display = 'block';
    });
    card.appendChild(cardButton);

    return card;
}