document.addEventListener("DOMContentLoaded", () => {
    window.scrollToSection = function(id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }

// Dark/Light toggle //
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        themeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Contact form //
document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        document.getElementById("formStatus").innerText = "Message sent successfully!";
    });


const fadeElements = document.querySelectorAll('.fade-in');
function triggerFade() {
        fadeElements.forEach(el => {
            const pos = el.getBoundingClientRect().top;
            const screen = window.innerHeight;
            if(pos < screen - 50) el.style.opacity = 1; 
        });
    }
window.addEventListener("scroll", triggerFade);
triggerFade();
});