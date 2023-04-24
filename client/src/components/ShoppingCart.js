export function ShoppingCart() {
    const cart = document.createElement('div');
    cart.classList.add('shopping-cart');

    const cartTitle = document.createElement('h2');
    cartTitle.textContent = 'Shopping Cart';
    // Make the Shopping Cart display a message when empty
    
    cart.appendChild(cartTitle);

    const cartList = document.createElement('ul');
    cart.appendChild(cartList);

    const cartTotal = document.createElement('p');
    cartTotal.textContent = `Total: 0.00`;
    cart.appendChild(cartTotal);

  // Add items to the cart
    cart.addItem = function (item) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    };

    return cart;
}

// store Cart data in local storage
// add cartData object
// add cartData.items array
// add cartData.total

