// Task 1: Ask Name & Registration ID
function task1() {
    let name = prompt("Enter your Name:");
    let reg = prompt("Enter your Registration ID:");

    alert("Name: " + name + "\nRegistration ID: " + reg);
}


// Task 2: Arithmetic + Comparison
function task2() {
    let num1 = prompt("Enter first number:");
    let num2 = prompt("Enter second number:");

    // Convert to numbers
    num1 = Number(num1);
    num2 = Number(num2);

    let sum = num1 + num2;
    let diff = num1 - num2;
    let product = num1 * num2;
    let quotient = num1 / num2;
    let comparison = num1 > num2;

    let output =
        "Sum: " + sum + "\n" +
        "Difference: " + diff + "\n" +
        "Product: " + product + "\n" +
        "Quotient: " + quotient + "\n" +
        "Comparison (num1 > num2): " + comparison;

    alert(output);
}
