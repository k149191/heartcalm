const navMenu = document.getElementById('navMenu');

navMenu.addEventListener('click', function (event) {
    if (event.target.closest('a') && navMenu.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
});

const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('emailInput');
const emailFeedback = document.getElementById('emailFeedback');
const modalEmail = document.getElementById('modalEmail');
const successModal = new bootstrap.Modal(document.getElementById('successModal'));

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

function getEmailError(email) {
    if (email === '') return 'Email wajib diisi.';
    if (!EMAIL_PATTERN.test(email)) return 'Format email tidak valid. Contoh: nama@email.com';
    return '';
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = emailInput.value.trim();
    const error = getEmailError(email);

    emailInput.classList.toggle('is-invalid', error !== '');
    if (error) {
        emailFeedback.textContent = error;
        return;
    }

    modalEmail.textContent = email;
    successModal.show();
    form.reset();
});

emailInput.addEventListener('input', function () {
    emailInput.classList.remove('is-invalid');
});
