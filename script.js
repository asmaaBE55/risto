gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    const tl = gsap.timeline();
    tl.to(".logo-loader", { duration: 1, opacity: 0 })
      .to("#loader", { duration: 0.8, yPercent: -100, ease: "expo.inOut" })
      .from(".hero-content", { duration: 1.2, y: 50, opacity: 0, ease: "power4.out" }, "-=0.3");
});

gsap.from(".dish-card", {
    scrollTrigger: { trigger: ".dishes-grid", start: "top 85%" },
    y: 60, opacity: 0, duration: 1, stagger: 0.2
});

const bookingForm = document.getElementById('bookingForm');
const successMsg = document.getElementById('success-msg');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('submitBtn').innerText = "INVIO...";
    
    setTimeout(() => {
        bookingForm.style.display = 'none';
        successMsg.style.display = 'block';
    }, 1500);
});