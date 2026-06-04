// =========================================================
// 1. LOADING SCREEN
// =========================================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 800); // Tampil minimal 0.8 detik agar animasi terlihat premium
});

// =========================================================
// 2. NAVBAR SCROLL EFFECT & RESPONSIVE TOGGLE
// =========================================================
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar solid saat scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hamburger Menu Toggle untuk Mobile
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Animasi icon hamburger berubah ke 'X'
    if (navbar.classList.contains('active')) {
        hamburger.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Tutup menu mobile saat link di-klik
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// =========================================================
// 3. TYPING TEXT ANIMATION PADA HERO SECTION
// =========================================================
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
    "Membentuk Generasi Unggul dan Profesional.", 
    "Berbasis Teknologi Masa Depan.", 
    "Pilihan Terbaik untuk Masa Depanmu."
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Waktu jeda sebelum menghapus text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Mulai animasi typing setelah window ter-load
document.addEventListener("DOMContentLoaded", function() { 
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Animasi blinking kursor
setInterval(() => {
    cursorSpan.style.opacity = (cursorSpan.style.opacity == 0 ? 1 : 0);
}, 400);

// =========================================================
// 4. SCROLL REVEAL ANIMATION & ACTIVE MENU INDICATOR
// =========================================================
const reveals = document.querySelectorAll('.reveal');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    // Efek Muncul (Reveal)
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }

    // Active Menu Navigator
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Pengecekan posisi scroll saat ini berada di section mana
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// =========================================================
// 5. BACK TO TOP BUTTON
// =========================================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =========================================================
// 6. FOOTER AUTO YEAR
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

