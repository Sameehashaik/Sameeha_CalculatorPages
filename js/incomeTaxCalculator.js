// Define a function to select elements by their CSS selector
const $ = selector => document.querySelector(selector);

// Define a function to clear the taxable income and tax owed fields
const clearTaxableIncome = () => {
    $("#taxableincome").value = "";
    $("#incometaxowed").value = "";
};

// Define the processEntry function to handle user input
const processEntry = evt => {
    // Retrieve the value of the taxable income input and parse it as an integer
    const taxableIncome = parseInt($("#taxableincome").value);

    // Check if the input is not a number or less than or equal to 0
    if (isNaN(taxableIncome) || taxableIncome <= 0) {
        // Display an error message and set focus to the taxable income input
        alert("Please enter a valid number greater than zero.")
        $("#taxableincome").focus();
        return; // Exit the function early if the input is invalid
    }

    // Call the calculateTax function with the taxable income
    calculateTax(taxableIncome);

    // Prevent the default form submission behavior
    evt.preventDefault();
}

// Define the calculateTax function to calculate the tax owed based on taxable income
const calculateTax = taxableIncome => {
    let taxOwed = 0;

    // Determine the tax owed based on the taxable income brackets
    if (taxableIncome <= 9875) {
        taxOwed = taxableIncome * 0.10;
    } else if (taxableIncome <= 40125) {
        taxOwed = 987.50 + (taxableIncome - 9875) * 0.12;
    } else if (taxableIncome <= 85525) {
        taxOwed = 4617.50 + (taxableIncome - 40125) * 0.22;
    } else if (taxableIncome <= 163300) {
        taxOwed = 14605.50 + (taxableIncome - 85525) * 0.24;
    } else if (taxableIncome <= 207350) {
        taxOwed = 33271.50 + (taxableIncome - 163300) * 0.32;
    } else if (taxableIncome <= 518400) {
        taxOwed = 47367.50 + (taxableIncome - 207350) * 0.35;
    } else {
        taxOwed = 156235.00 + (taxableIncome - 518400) * 0.37;
    }

    // Display the calculated tax owed in the tax owed input field
    $("#incometaxowed").value = taxOwed.toFixed(2);
}

// Add an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // Select the Calculate button and attach the processEntry function to its click event
    $("#calculate").addEventListener("click", processEntry);

    // Set focus to the taxable income input field when the page loads
    $("#taxableincome").focus();

    // Event listener for the Clear button
    $("#clear").addEventListener("click", evt => {
        // Prevent default form submission behavior
        evt.preventDefault();

        // Clear all input fields and move focus to the taxable income input field
        clearTaxableIncome();
        $("#taxableincome").value = "";
    });

    // Event listener for clearing taxable income input field when clicked
    $("#taxableincome").addEventListener("click", clearTaxableIncome);
});
