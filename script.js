/* TOGGLE MODE */
function toggleMode() {
    document.body.classList.toggle("light-mode");
}

/* TYPING EFFECT */
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

window.addEventListener("DOMContentLoaded", typeEffect);

/* CONTACT FORM ALERT */
document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("🔥 Message sent successfully!");
    this.reset();
});