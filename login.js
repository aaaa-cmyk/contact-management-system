// Function to handle form submission and process login
function handleLoginFormSubmission(form) {
    // Prevent the default form submission to avoid appending URL parameters
    var formData = new FormData(form);

    // Extract the form input using name attributes
    var enteredEmail = formData.get('contactEmail').trim();    // Email entered by the user
    var enteredPassword = formData.get('contactPassword').trim(); // Password entered by the user

    // Example credentials for demo purposes (in practice, this would come from a database)
    var registeredUsers = [
        {email: "test@gmail.com", password: "test"},  // Example user
        {email: "user2@gmail.com", password: "Password2"} // Another example user
    ];

    // Flag to track if the login is successful
    var isAuthenticated = false;

    // Check if entered email and password match any registered user credentials
    for (let i = 0; i < registeredUsers.length; i++) {
        if (enteredEmail === registeredUsers[i].email && enteredPassword === registeredUsers[i].password) {
            isAuthenticated = true;
            break;
        }
    }

    // Handle the login result
    if (isAuthenticated) {
        alert("Login successful!");
        // Redirect to the Contacts Page
        window.location.replace("index.html");
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

// Add event listener for form submission
var formElement = document.getElementById("log");
if (formElement) {
    formElement.addEventListener('submit', function (event) {
        // Prevent the form's default action (prevents URL parameters from being appended)
        event.preventDefault();
        handleLoginFormSubmission(event.target);  // Call the form handler with the form data
    });
}
