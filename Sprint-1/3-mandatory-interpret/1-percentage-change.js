let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

    /*
    There are 5 function calls,
    line 4 carPrice.replaceAll()
    line 4 Number()
    line 5 priceAfterOneYear.replaceAll()
    line 5 Number()
    line 10 console.log()
    */

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

    /* There's a syntax error in line 5, there's no comma in between arguments
    it should be priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
    */


// c) Identify all the lines that are variable reassignment statements

    /*There are 2 variable reassignments
    line 4, carPrice = Number(carPrice.replaceAll(",", ""));
    line 5, priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations

    /*Variable Declarations are lines 1,2,7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

    //It removes all the commas converting the string to a number so it can be used in the math operations
    
