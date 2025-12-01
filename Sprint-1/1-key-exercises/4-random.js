const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//(maximum - minimum + 1) this will give a result of 99+1
//Math.random() will give a random number lesser 1
//Math.floor(Math.random() * (maximum - minimum + 1)) this expression will remove the decimal point and round down the value
//+ minimum this is the last part to be evaluated, it will add 1 to the first part

//Answer: num will give a random value from 0 to 100