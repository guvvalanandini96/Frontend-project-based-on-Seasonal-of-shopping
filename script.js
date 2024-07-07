const form = document.getElementById('login-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const password = passwordInput.value.trim();

    if (name === '' || email === '' || phone === '' || password === '') {
        alert('Please fill in all fields.');
    } else if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
    } else {
        // Perform login logic here (e.g., send data to server)
        console.log('Login successful!');
        // Reset form fields
        nameInput.value = '';
        emailInput.value = '';
        phoneInput.value = '';
        passwordInput.value = '';
    }
});