const welcomeMessage = document.getElementById("welcome-message");

const messages = [
    "Hi, I am Brianne",
    "I do graphic design and coding"
];

let messageIndex = 0;
let charIndex = 0;
let currentMessage = "";

function type() {
    if (charIndex < messages[messageIndex].length) {
        currentMessage += messages[messageIndex].charAt(charIndex);
        welcomeMessage.innerHTML = currentMessage;
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        currentMessage = currentMessage.slice(0, -1);
        welcomeMessage.innerHTML = currentMessage;
        charIndex--;
        setTimeout(erase, 100);
    } else {
        messageIndex = (messageIndex + 1) % messages.length;
        charIndex = 0;
        setTimeout(type, 500);
    }
}

window.onload = () => {
    type();
};
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
