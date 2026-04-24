// Registrazione Plugin GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Loader Animation
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.to(".logo-loader", { duration: 1, opacity: 0, y: -20, ease: "power2.inOut" })
      .to("#loader", { duration: 0.8, height: 0, ease: "expo.inOut" })
      .from(".hero-content h1", { duration: 1, y: 50, opacity: 0, ease: "power4.out" }, "-=0.2")
      .from(".hero-content p", { duration: 1, y: 30, opacity: 0 }, "-=0.5")
      .from("nav", { duration: 1, y: -50, opacity: 0 }, "-=1");
});

// 2. Animazione Elementi allo Scroll
gsap.utils.toArray(".menu-item").forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// 3. Navbar color change on scroll
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.padding = "10px 50px";
        nav.style.background = "rgba(10, 14, 20, 0.95)";
    } else {
        nav.style.padding = "20px 50px";
        nav.style.background = "rgba(10, 14, 20, 0.8)";
    }
};