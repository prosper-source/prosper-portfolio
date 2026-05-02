/* =========================
   TYPING EFFECT
========================= */
const texts = ["Frontend Developer", "JavaScript Expert", "UI Builder"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingEl = document.getElementById("typing");

  if (!typingEl) return; // prevents errors

  if (index >= texts.length) index = 0;

  currentText = texts[index];

  if (isDeleting) {
    typingEl.textContent = currentText.substring(0, charIndex--);
  } else {
    typingEl.textContent = currentText.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* THEME TOGGLE FIX */
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("themeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");

      // Save preference
      if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
});

/* Load saved theme */
window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
};

/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

/* =========================
   DEBUG MESSAGE
========================= */
console.log("🚀 Portfolio loaded successfully!");