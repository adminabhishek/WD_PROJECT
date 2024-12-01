// Email Validation (Standard email format: name@domain.com)
function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Regex for email validation

    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address (e.g., name@domain.com).');
        return false;
    }
    return true;
}

// Phone Number Validation (10 digits only)
function validatePhoneNumber() {
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{10}$/; // Regular expression for 10 digits

    if (!phoneRegex.test(phone)) {
        alert('Phone number must be exactly 10 digits.');
        return false;
    }
    return true;
}

// Main Validation Function for Practical 7
function validatePractical7() {
    if (!validateEmail() || !validatePhoneNumber()) {
        return false; // Prevent form submission if validation fails
    }
    return true; // Allow form submission if validation passes
}
