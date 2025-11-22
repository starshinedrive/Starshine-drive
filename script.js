// Mobile menu toggle
function toggleMenu() {
  const nav = document.querySelector('.mobile-nav');
  nav.classList.toggle('open');
}

// Smooth scroll
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Reveal animation on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll('.card').forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
