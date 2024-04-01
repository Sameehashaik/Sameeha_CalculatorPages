// Define a function to select elements by their CSS selector
const $ = selector => document.querySelector(selector);

// Function to clear the value of the Change Due input field
const clearChangeDue = () => {
    $("#changedue").value = "";
};

// Define the processEntry function to handle user input
const processEntry = evt => {
    // Retrieve the value of the change due input and parse it as an integer
    const changeDue = parseInt($("#changedue").value);

    // Check if the input is a valid number between 0 and 99
    if (!isNaN(changeDue) && changeDue >= 0 && changeDue <= 99) {
        // If the input is valid, call the makeChange function with the amount
        makeChange(changeDue);
    } else {
        // If the input is not valid, display an alert message
        alert("Please enter a number between 0 and 99.");
    }

    // Prevent the default form submission behavior
    evt.preventDefault();
};

// Define the makeChange function to calculate change
const makeChange = amt => {
    // Calculate the number of quarters needed
    const quarters = parseInt(amt / 25);

    // Calculate the remaining amount after using quarters
    const remainingAfterQuarters = amt % 25;

    // Calculate the number of dimes needed
    const dimes = parseInt(remainingAfterQuarters / 10);

    // Calculate the remaining amount after using dimes
    const remainingAfterDimes = remainingAfterQuarters % 10;

    // Calculate the number of nickels needed
    const nickels = parseInt(remainingAfterDimes / 5);

    // Calculate the number of pennies needed
    const pennies = remainingAfterDimes % 5;

    // Display the results in the corresponding input fields
    $("#quarters").value = quarters;
    $("#dimes").value = dimes;
    $("#nickels").value = nickels;
    $("#pennies").value = pennies;
};

// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Select the Calculate button and attach the processEntry function to its click event
    $("#calculate").addEventListener("click", processEntry);

    // Set focus to the Change Due input field when the page loads
    $("#changedue").focus();

    // Event listener for the Clear button
    $("#clear").addEventListener("click", evt => {
        // Prevent default form submission behavior
        evt.preventDefault();

        // Clear all input fields and move focus to the ChangeDue input field
        clearChangeDue();
        $("#quarters").value = "";
        $("#dimes").value = "";
        $("#nickels").value = "";
        $("#pennies").value = "";
        $("#changedue").focus();
    });

    // Event listeners for clearing ChangeDue input field when clicked
    $("#changedue").addEventListener("click", clearChangeDue);
});
