const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
0,
  penceString.length - 1
);// will remove 'p' so the answer is 399

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");//this won't do much for the given since it's already 3 numbers
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);// this code will remove the first digit, 

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");//this code will add '0' in front of the pence if it has 1 number

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

/*
2. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
:remove the trailing 'p' from the string.substring(0, penceString.length - 1) takes characters from index 0 up to (but not including) the last character.
*/


/*
3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
:Ensure the string has at least 3 characters by adding leading zeros if necessary.
*/



/*
4. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
: This will extract the first digit, the pounds portion
*/

/*
5.const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");//this code will add '0' in front of the pence if it has 1 number
: this code extracts the pence portion, makes sure the it has exactly 2 digits
*/

/*
6. console.log(`£${pounds}.${pence}`);
:prints the new formatted value of pounds and pence
*/