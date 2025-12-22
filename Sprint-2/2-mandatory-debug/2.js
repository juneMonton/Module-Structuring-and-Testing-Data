// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here: it will always display that the last number of all input is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here :num is declared as const, so num will always be 103 and last digit will always be 3
// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);   // 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`); // 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`); // 6


// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
