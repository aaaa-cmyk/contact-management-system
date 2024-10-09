document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    var name = document.getElementById('contactName').value;
    var email = document.getElementById('contactEmail').value;
    var password = document.getElementById('contactPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic validation for matching passwords
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Perform sign-up logic (could involve saving to a database or an API call)
    alert("Sign-up successful!");

    // Redirect to login page or another page after successful sign-up
    window.location.replace("login.html");
});
