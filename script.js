/* =========================
   TYPING EFFECT
========================= */
const text = "Hi, I'm Prosper Olamide 🚀";
let i = 0;

function typeEffect() {
    const el = document.getElementById("typing");
    if (!el) return;

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }

    type();
}

/* =========================
   DARK / LIGHT TOGGLE
========================= */
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

/* =========================
   INIT ON LOAD
========================= */
window.addEventListener("DOMContentLoaded", typeEffect);