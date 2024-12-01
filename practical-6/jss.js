 
// Form validation function
function validateForm() {
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/;
    const languages = document.querySelectorAll('input[name="languages"]:checked');
    const dob = document.getElementById('dob').value;
    const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/; // Validate DD/MM/YYYY format

    if (!phoneRegex.test(phone)) {
        alert('Phone number must be 10 digits.');
        return false;
    }

    if (!dobRegex.test(dob)) {
        alert('Date of birth must be in DD/MM/YYYY format.');
        return false;
    }

    if (languages.length === 0) {
        alert('Please select at least one language.');
        return false;
    }

    return true;
}
