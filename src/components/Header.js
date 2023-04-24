export function Header() {
    // add header elements and logic here
    const header = document.createElement('header');
    header.classList.add('header');

    // Logo
    const logo = document.createElement('a');
    logo.href = '/';
    logo.textContent = 'Bubble Broz';
    logo.classList.add('logo');
    header.appendChild(logo);

    // Navigation + Links
    const nav = document.createElement('nav');
    const navLinks = ['Shop', 'About Us', 'Cart'];
    navLinks.forEach((linkMoniker) => {
        const link = document.createElement('a');
        link.href = `/${linkMoniker.toLowerCase().replace(' ', '-')}`;
        link.textContent = linkMoniker;
        nav.appendChild(link);
    });
    header.appendChild(nav);

    // Search Bar
    function handleSearchInput(event) {
        const searchTerm = event.target.value.trim().toLowerCase();
        // Add your search logic here, e.g., filter products, update the UI, etc.
        console.log('Search term:', searchTerm);
    }

    const searchBar = document.createElement('div');
    searchBar.classList.add('search-bar');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search Products';
    searchBar.appendChild(searchInput);
    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchBar.appendChild(searchButton);

    searchInput.addEventListener('input', handleSearchInput);

    header.appendChild(searchBar);


    // Cart
    const cart = document.createElement('a');
    cart.href = '/cart';
    cart.innerHTML = `🛒<span class="cart-counter">0</span>`;
    header.appendChild(cart);

    return header;
}
