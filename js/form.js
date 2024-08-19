const scriptURL = 'https://script.google.com/macros/s/AKfycby3TztcSVzd-QyvSa86rhfa20iS1NOyaD3103uUn2fv0ePjgC-1KuX-Evyn5O5Lo68usw/exec';
const form = document.forms['contact-form'];
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener('input', validateForm);
form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
        return;
    }

    const whatsappInput = document.getElementById('whatsapp-number').value;
    const whatsappError = document.getElementById('whatsappError');
    const phonePattern = /^\d{10,}$/;

    if (!phonePattern.test(whatsappInput)) {
        whatsappError.textContent = "Please enter a valid WhatsApp number with at least 10 digits.";
        return;
    } else {
        whatsappError.textContent = "";
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message));
});

document.getElementById('whatsapp-number').addEventListener('input', function () {
    var phone = this.value;
    var whatsappError = document.getElementById('whatsappError');
    var pattern = /^\d{10,}$/;

    if (!pattern.test(phone)) {
        whatsappError.textContent = "Please enter a valid WhatsApp number with at least 10 digits.";
    } else {
        whatsappError.textContent = "";
    }
});

function validateForm() {
    const companyName = document.getElementById('company-name').value;
    const startupConcept = document.getElementById('startup-concept').value;
    const currentStage = document.getElementById('current-stage').value;
    const projectDifference = document.getElementById('project-difference').value;
    const whatsappNumber = document.getElementById('whatsapp-number').value;
    const phonePattern = /^\d{10,}$/;

    if (companyName && startupConcept && currentStage && projectDifference && phonePattern.test(whatsappNumber)) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
