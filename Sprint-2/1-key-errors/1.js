// Predict and explain first...
//the code was supposed to convert a number input into percentage

// Why will an error occur when this program runs?
// =============> write your prediction here: An error will occur because "decimalNumber" has been redeclared inside the function 

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
//a variable can only be declared once, and const value cannot be replaced

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
console.log(decimalNumber);