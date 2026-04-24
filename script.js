gsap.registerPlugin(ScrollTrigger);

// Loader e Animazione d'ingresso
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".logo-loader", { duration: 1, opacity: 0, scale: 1.1 })
      .to("#loader", { duration: 0.8, yPercent: -100, ease: "expo.inOut" })
      .from(".hero-content", { duration: 1.2, y: 80, opacity: 0, ease: "power4.out" }, "-=0.2");
});

// Animazione piatti allo scroll
gsap.from(".dish-card", {
    scrollTrigger: { trigger: ".dishes-grid", start: "top 85%" },
    y: 50, opacity: 0, duration: 1, stagger: 0.2
});

// Gestione Modulo Prenotazione
const form = document.getElementById('bookingForm');
const success = document.getElementById('success-msg');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    btn.innerText = "Invio in corso...";
    btn.disabled = true;

    // Simulazione invio (qui collegherai il tuo Google Sheet)
    setTimeout(() => {
        form.style.display = 'none';
        success.style.display = 'block';
        gsap.from(success, { duration: 0.5, scale: 0.9, opacity: 0, ease: "back.out" });
    }, 2000);
});