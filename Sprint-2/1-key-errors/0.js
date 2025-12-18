// Predict and explain first...
//  =============> write your prediction here
//Function capitalise will make thes tring input first letter to Big case 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here : str has been declared in the function parameter and inside the function
// =============> write your new code here
function capitalise(str) {
  return str `${str[0].toUpperCase()}${str.slice(1)}`;
}