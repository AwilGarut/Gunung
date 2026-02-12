// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 100) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }
});

// Dark Mode Logic
const toggle = document.getElementById('dark-mode-toggle');
const icon = toggle.querySelector('i');
const body = document.documentElement;

toggle.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
    }
});