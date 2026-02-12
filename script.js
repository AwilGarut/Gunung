// Ganti background navbar saat scroll
window.onscroll = function() {
    const nav = document.getElementById("main-nav");
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("nav-active");
    } else {
        nav.classList.remove("nav-active");
    }
};

// Logika agar teks tidak uppercase otomatis
document.querySelectorAll('h2').forEach(el => {
    el.style.textTransform = "none";
});