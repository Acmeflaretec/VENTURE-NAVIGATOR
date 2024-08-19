const scriptURL = 'https://script.google.com/macros/s/AKfycby3TztcSVzd-QyvSa86rhfa20iS1NOyaD3103uUn2fv0ePjgC-1KuX-Evyn5O5Lo68usw/exec';
const form = document.forms['contact-form'];  // Update this if you have a different form name or ID
const submitButton = document.querySelector('button[type="submit"]');  // Assuming there's only one submit button

form.addEventListener('input', validateForm);
form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
        return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! Your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message));
});

function validateForm() {
    const companyName = document.getElementById('company-name').value;
    const startupConcept = document.getElementById('startup-concept').value;
    const currentStage = document.getElementById('current-stage').value;
    const projectDifference = document.getElementById('project-difference').value;

    if (companyName && startupConcept && currentStage && projectDifference) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}
