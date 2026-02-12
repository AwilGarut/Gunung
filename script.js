// --- NAVBAR & BACK TO TOP LOGIC ---
const nav = document.getElementById('main-nav');
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener('scroll', () => {
    // Efek Navbar
    if (window.scrollY > 50) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }

    // Munculkan Tombol Back to Top
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Klik Back to Top
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- DARK MODE LOGIC ---
const toggle = document.getElementById('dark-mode-toggle');
const body = document.documentElement;

toggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggle.querySelector('i').className = isDark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});