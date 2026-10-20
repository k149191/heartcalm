document.addEventListener('DOMContentLoaded', function () {
    var navMenu = document.getElementById('navMenu');

    document.querySelectorAll('#navMenu a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
            }
        });
    });

    var form = document.getElementById('newsletterForm');
    var emailInput = document.getElementById('emailInput');
    var emailFeedback = document.getElementById('emailFeedback');
    var modalEmail = document.getElementById('modalEmail');
    var successModal = new bootstrap.Modal(document.getElementById('successModal'));

    var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

    function showError(message) {
        emailInput.classList.add('is-invalid');
        emailFeedback.textContent = message;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var email = emailInput.value.trim();

        if (email === '') {
            showError('Email wajib diisi.');
            return;
        }
        if (!EMAIL_PATTERN.test(email)) {
            showError('Format email tidak valid. Contoh: nama@email.com');
            return;
        }

        modalEmail.textContent = email;
        successModal.show();
        form.reset();
        emailInput.classList.remove('is-invalid');
    });

    emailInput.addEventListener('input', function () {
        emailInput.classList.remove('is-invalid');
    });
});
