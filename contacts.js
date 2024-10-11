// Example contacts data
let contacts = [
    { name: "Rohan", email: "rohan@example.com", phone: "123-456-7890" },
    { name: "Zachary", email: "zachary@example.com", phone: "987-654-3210" },
    { name: "Vinay", email: "vinay@example.com", phone: "456-789-1234" },
    { name: "Watergate Scandal Guy", email: "watergate@example.com", phone: "321-654-9870" },
    { name: "Adarsh", email: "adarsh@example.com", phone: "789-123-4560" },
    { name: "George W. Bush", email: "george@example.com", phone: "654-321-0987" },
    { name: "Sigma (Overwatch)", email: "sigma@example.com", phone: "111-222-3333" },
    { name: "Skibidi Slicer", email: "skibidi@example.com", phone: "555-666-7777" },
    { name: "Dahta Ayida Tata", email: "dahta@example.com", phone: "888-999-0000" },
    { name: "Bohan Banker", email: "bohan@example.com", phone: "000-111-2222" },
];

// Function to display contacts in the list
function displayContacts() {
    const contactList = document.getElementById("contact_list");
    contactList.innerHTML = '';  // Clear existing list

    // Loop through contacts and create list items
    contacts.forEach((contact, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("contact-name");
        listItem.setAttribute("role", "option");
        listItem.textContent = contact.name;
        listItem.addEventListener("click", () => displayContactDetails(index));  // Add click event
        contactList.appendChild(listItem);
    });
}

// Function to display details of the clicked contact
function displayContactDetails(index) {
    const contact = contacts[index];
    const contactDetails = document.getElementById("contact-details");
    contactDetails.innerHTML = `
        <h2>${contact.name}</h2>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
    `;
}

// Initial call to display contacts
window.onload = displayContacts;
