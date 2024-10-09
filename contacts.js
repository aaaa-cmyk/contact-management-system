// Sample contacts data (in real scenarios, this would come from a database)
let contacts = [
    { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
    { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" }
];

// Function to display contacts in the table
function displayContacts() {
    const contactsTable = document.querySelector("#contacts-table tbody");
    contactsTable.innerHTML = ''; // Clear the table

    // Loop through contacts and add rows
    contacts.forEach((contact, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button onclick="editContact(${index})">Edit</button>
                <button onclick="deleteContact(${index})">Delete</button>
            </td>
        `;
        contactsTable.appendChild(row);
    });
}

// Function to handle adding new contacts
document.querySelector("#contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const newName = document.querySelector("#contactName").value;
    const newEmail = document.querySelector("#contactEmail").value;
    const newPhone = document.querySelector("#contactPhone").value;

    // Add the new contact to the contacts array
    contacts.push({ name: newName, email: newEmail, phone: newPhone });

    // Display the updated contacts list
    displayContacts();

    // Clear the form
    this.reset();
});

// Function to delete a contact
function deleteContact(index) {
    contacts.splice(index, 1);  // Remove the contact at the given index
    displayContacts();  // Refresh the contacts list
}

// Function to edit a contact (basic functionality for now)
function editContact(index) {
    const contact = contacts[index];
    document.querySelector("#contactName").value = contact.name;
    document.querySelector("#contactEmail").value = contact.email;
    document.querySelector("#contactPhone").value = contact.phone;

    // Remove the old contact and replace it when the form is submitted
    contacts.splice(index, 1);
}

// Function to handle logging out
function logout() {
    window.location.replace("login.html"); // Redirect back to login page
}

// Initial call to display the contacts when the page loads
window.onload = displayContacts;

