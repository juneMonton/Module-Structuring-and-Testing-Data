// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
// Converts kilograms to pounds
function toPounds(kg) {
    const pounds = kg * 2.20462;  // 1 kg ≈ 2.20462 lbs
    return pounds;
}

// Testing the function with different inputs
console.log(toPounds(1));    // 2.20462
console.log(toPounds(5));    // 11.0231
console.log(toPounds(10));   // 22.0462
console.log(toPounds(70));   // 154.3234
