// Name Validation (Only alphabets, minimum 6 characters)
function validateName() {
    const name = document.getElementById('name').value;
    const nameRegex = /^[A-Za-z]+$/; // Regular expression for alphabets only

    if (name.length < 6 || !nameRegex.test(name)) {
        alert('Name must be at least 6 characters long and contain only alphabets.');
        return false;
    }
    return true;
}

// Password Validation (Minimum 6 characters)
function validatePassword() {
    const password = document.getElementById('password').value;

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return false;
    }
    return true;
}

// Main Validation Function for Practical 6
function validatePractical6() {
    if (!validateName() || !validatePassword()) {
        return false; // Prevent form submission if validation fails
    }
    return true; // Allow form submission if validation passes
}
