// Smooth scroll for future sections
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animate product cards on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".product-card").forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});