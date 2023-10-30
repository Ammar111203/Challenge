
const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('passIcon');

const passwordField1 = document.getElementById('password1');
const togglePassword1 = document.getElementById('passIcon1');

togglePassword.addEventListener('click', () => {
    if (passwordField.type === 'password') {
    passwordField.type = 'text';
    } else {
    passwordField.type = 'password';
    }
});
togglePassword1.addEventListener('click', () => {
    if (passwordField1.type === 'password') {
    passwordField1.type = 'text';
    } else {
    passwordField1.type = 'password';
    }
});
