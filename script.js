// ================= Box Animation =================
const animateBtn = document.getElementById('animateBtn');
const box = document.getElementById('box');

animateBtn.addEventListener('click', () => {
    box.classList.toggle('animate'); // toggle animation
});

// ================= Greeting Function =================
const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

greetBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if(name === "") {
        greeting.textContent = "Please enter your name!";
    } else {
        greeting.textContent = `Hello, ${name}! Welcome to the site.`;
    }
});

// ================= Contact Form Validation =================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if(contactForm){
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent form submission
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        if(name === "" || email === "") {
            formMessage.textContent = "Please fill out all fields!";
        } else {
            formMessage.textContent = "Form submitted successfully!";
            contactForm.reset();
        }
    });
}
