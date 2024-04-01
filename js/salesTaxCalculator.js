// Define a function to select elements by their IDs
const $ = selector => document.querySelector(selector);

// Function to clear the value of the Subtotal input field
const clearSubtotal = () => {
    $("#subtotal").value = "";
};

// Function to clear the value of the Tax Rate input field
const clearTaxRate = () => {
    $("#taxrate").value = "";
};

// Event handler function for processing entries and calculating sales tax
const processEntries = evt => {
    // Get the values of Subtotal and Tax Rate inputs
    const subTotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#taxrate").value);

    // Calculate sales tax and total
    const salesTax = subTotal * (taxRate / 100);
    const total = subTotal + salesTax;

    // Display sales tax and total in the respective input fields
    $("#salestax").value = salesTax.toFixed(2);
    $("#total").value = total.toFixed(2);

    // Validate Subtotal and Tax Rate inputs
    if (isNaN(subTotal) || subTotal <= 0 || subTotal >= 10000) {
        // Display an alert if Subtotal is invalid
        alert("Subtotal must be > 0 and < 10000");
        return;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        // Display an alert if Tax Rate is invalid
        alert("Tax Rate must be > 0 and < 12");
        return;
    }

    // Prevent the default form submission behavior
    evt.preventDefault();
};

// Event listener for DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
    // Attach click event listener to Calculate button
    $("#calculate").addEventListener("click", processEntries);
    
    // Set focus to the Subtotal input field when the page loads
    $("#subtotal").focus();

    // Event listener for the Clear button
    $("#clear").addEventListener("click", evt => {
        // Prevent default form submission behavior
        evt.preventDefault();

        // Clear all input fields and move focus to the Subtotal input field
        clearSubtotal();
        clearTaxRate();
        $("#salestax").value = "";
        $("#total").value = "";
        $("#subtotal").focus();
    });

    // Event listeners for clearing Subtotal and Tax Rate input fields when clicked
    $("#subtotal").addEventListener("click", clearSubtotal);
    $("#taxrate").addEventListener("click", clearTaxRate);
});
