
// Predict and explain first BEFORE you run any code...
//this will not run because variables num are not declared
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here: num is not defined

function square(3) {
    return num * num;
}

// =============> write the error message here: " Illegal return statement"

// =============> explain this error message here: The return is outside the function, Javascript is treating is at function since the parameter is a value and not an identifier that's why the return inside was not treated as a function

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}