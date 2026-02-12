// 1. Inisialisasi Tema (Mengingat pilihan user)
const body = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);

const toggle = document.getElementById('dark-mode-toggle');
const icon = toggle.querySelector('i');
if (currentTheme === 'dark') icon.className = 'fa-solid fa-sun';

// 2. Logika Dark Mode
toggle.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.className = 'fa-solid fa-moon';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.className = 'fa-solid fa-sun';
    }
});

// 3. Scroll Reveal Animation & Navbar Effect
const revealElements = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const windowHeight = window.innerHeight;
        const revealTop = card.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (revealTop < windowHeight - revealPoint) {
            card.classList.add('active');
        }
    });
};

const backToTopBtn = document.getElementById("backToTop");

window.addEventListener('scroll', () => {
    // Navbar effect
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('nav-active');
    } else {
        nav.classList.remove('nav-active');
    }

    // Reveal animation
    revealElements();

    // Back to top logic
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// 4. Back to Top Click
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Jalankan reveal saat halaman dimuat pertama kali
window.onload = revealElements;