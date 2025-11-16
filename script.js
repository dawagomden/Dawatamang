
// Navbar scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Typing effect
const typingText = document.querySelector('.typing-text');
const phrases = ["Frontend Developer  " ];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loop() {
  typingText.textContent = currentPhrase.join("");
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }
    if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }
    if (j === phrases[i].length) {
      isDeleting = true;
      setTimeout(loop, 3000);
      return;
    }
    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i = (i + 1) % phrases.length;
    }
  }
  setTimeout(loop, isDeleting ? 50 : 100);
}
loop();

// Contact form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Enter a valid email address.");
    return;
  }
  alert("Message sent successfully!");
  form.reset();
});

