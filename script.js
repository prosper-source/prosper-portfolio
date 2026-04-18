/* THEME TOGGLE */
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

/* TYPING EFFECT (SMOOTHER) */
const text = "Hi, I'm Prosper Olamide 🚀";
let i = 0;

function typeEffect() {
    const el = document.getElementById("typing");
    if (!el) return;

    el.innerHTML = "";

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 70);
        }
    }

    type();
}

window.addEventListener("DOMContentLoaded", typeEffect);

/* CONTACT FORM SMOOTH FEEDBACK */
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const btn = form.querySelector("button");
        btn.innerText = "Sending...";

        setTimeout(() => {
            alert("🔥 Message sent successfully!");
            btn.innerText = "Send Message";
            form.reset();
        }, 800);
    });
}