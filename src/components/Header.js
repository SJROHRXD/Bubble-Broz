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
    // Cart

    return header;
}
