// GSAP E SCROLLTRIGGER
gsap.registerPlugin(ScrollTrigger);

// 1. Loader Animazione
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".logo-loader", { duration: 1, opacity: 0, y: -20 })
      .to("#loader", { duration: 0.8, yPercent: -100, ease: "expo.inOut" })
      .from(".hero-content", { duration: 1, y: 50, opacity: 0, ease: "power4.out" }, "-=0.3");
});

// 2. Toggle Menu Mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Animazione Carte Specialità allo Scroll
gsap.from(".dish-card", {
    scrollTrigger: {
        trigger: ".dishes-grid",
        start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// 4. Gestione Form Prenotazione
const bookingForm = document.getElementById('bookingForm');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.getElementById('submitBtn');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    submitBtn.innerText = "Invio in corso...";
    submitBtn.disabled = true;

    // Qui simulo l'invio (Demo)
    setTimeout(() => {
        bookingForm.style.display = 'none';
        successMsg.style.display = 'block';
        
        // Animazione successo
        gsap.from(successMsg, { duration: 0.5, scale: 0.9, opacity: 0 });
        
        console.log("Dati pronti per Google Sheets:", {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            data: document.getElementById('data').value
        });
    }, 2000);
});

// Imposta data minima = oggi
const inputData = document.getElementById('data');
if(inputData) {
    inputData.min = new Date().toISOString().split("T")[0];
}