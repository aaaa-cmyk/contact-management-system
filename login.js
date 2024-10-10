// Function to handle form submission and process login
function handleLoginFormSubmission(form) {
    // Prevent the default form submission to avoid appending URL parameters
    var formData = new FormData(form);
    var userInput = [];
    // Usage of ^ is incredibly against cybersecurity standards. Using params in the link.

    // Collect the form data (email and password) into an array
    for (var field of formData.entries()) {
        userInput.push(field[1]);  // Collect Email and Password from the form
    }

    // Example credentials for demo purposes (in practice, this would come from a database)
    var registeredUsers = [
        {email: "test@example.com", password: "test"},  // Add more users as necessary
        {email: "user2@example.com", password: "Password2"}
    ];

    // Extract the form input
    var enteredEmail = userInput[0];    // Email entered by the user
    var enteredPassword = userInput[1]; // Password entered by the user

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
formElement = document.getElementById("log");
if (formElement) {
    formElement.addEventListener('submit', function (event) {
        // Prevent the form's default action (prevents URL parameters from being appended)
        event.preventDefault();  
        console.log("breakpoint");
        handleLoginFormSubmission(event.target);  // Call the form handler with the form data
    });
}