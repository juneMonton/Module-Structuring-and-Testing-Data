// Predict and explain first...

// =============> write your prediction here: the code block will display "The result of multiplying 10 and 32 is 320 "

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here: my prediction is wrong as the first console.log displays nothing as it doesn't have values yet and console.log doesn't hold a value it only displays

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
