const form = document.getElementById('signupForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const terms = document.getElementById('terms').checked;

  let errors = [];

  if (fullName.length < 2) {
    errors.push('Name too short.');
  }

  if (!email.includes('@') || !email.includes('.')) {
    errors.push('Invalid email format.');
  }

  if (password.length < 6) {
    errors.push('Password too short.');
  }

  if (password !== confirmPassword) {
    errors.push('Passwords do not match.');
  }

  if (!terms) {
    errors.push('You must agree to the terms.');
  }

  if (errors.length > 0) {
    status.innerHTML = `<ul style="color: red">${errors.map(e => `<li>${e}</li>`).join('')}</ul>`;
  } else {
    status.innerHTML = `<p style="color: green">Form submitted successfully!</p>`;
    form.reset();
  }
});
