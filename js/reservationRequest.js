// Define a function to select elements by their IDs
const $ = selector => document.querySelector(selector);

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {

    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Set focus on the arrival date input field when the page loads
    $("#date").focus();

    // Add an event listener for form submission
    document.querySelector("form").addEventListener("submit", evt => {
        // Prevent the default form submission behavior
        evt.preventDefault();

        // Retrieve user inputs
        const arrivalDate = $("#date").value.trim(); // Get arrival date
        const nights = $("#nightsno").value.trim(); // Get number of nights
        const adults = $("#adultsno").value.trim(); // Get number of adults
        const children = $("#childrenno").value.trim(); // Get number of children
        const roomType = document.querySelector('input[name="radio1"]:checked'); // Get selected room type
        const bedType = document.querySelector('input[name="radio2"]:checked'); // Get selected bed type
        const smoking = $("#smoking").checked; // Check if smoking preference is selected
        const fullName = $("#flname").value.trim(); // Get full name
        const email = $("#mail").value.trim(); // Get email address
        const phone = $("#phoneno").value.trim(); // Get phone number

        // Validate user entries
        if (!arrivalDate || !nights || !adults || !children || !roomType || !bedType || !fullName || !email || !phone) {
            // Alert the user if any required field is empty
            alert("A value must be entered into each text box.");
            return;
        }

        if (isNaN(nights)) {
            // Alert the user if the nights value is not numeric
            alert("The number of nights must be numeric.");
            return;
        }

        if (!emailPattern.test(email)) {
            // Alert the user if the email address doesn't match the required pattern
            alert("The email address must match the pattern that’s provided.");
            return;
        }

        // If all validations pass, you can proceed with form submission
        alert("Form submitted successfully!");
    });
});
