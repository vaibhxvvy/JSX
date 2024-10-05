 Basic Calculator Functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a  b;
}

function divide(a, b) {
    if (b === 0) {
        return 'Error Division by zero';
    }
    return a  b;
}

 Test the Calculator Functions
function testCalculator() {
    console.log(Addition 5 + 3 =, add(5, 3));  8
    console.log(Subtraction 5 - 3 =, subtract(5, 3));  2
    console.log(Multiplication 5  3 =, multiply(5, 3));  15
    console.log(Division 6  3 =, divide(6, 3));  2
    console.log(Division by Zero 6  0 =, divide(6, 0));  Error
}

 Run the tests
testCalculator();
