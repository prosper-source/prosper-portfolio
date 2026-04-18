function sayHi() {
    alert("🔥 Thanks for visiting my portfolio!");
}

function toggleMode() {
    document.body.classList.toggle("light-mode");
}

/* TYPING EFFECT */
const text = "Hi, I'm Prosper Olamide Bamidele 🚀";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;