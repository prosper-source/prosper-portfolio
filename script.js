/* CONTACT FORM */
document.querySelector(".contact-form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message sent successfully!");
});

/* SCROLL PROGRESS BAR */
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
};

/* TYPING ANIMATION */
const text = "Hi, I'm Prosper 👋";
let i = 0;

function type() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 80);
    }
}

window.onload = type;