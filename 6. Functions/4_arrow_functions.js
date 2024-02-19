// Arrow Functions are regular functions but a compact way of it.

/*
SYNTAX:

const functionName = (param1, param2, para....) => {
    // do something
}
*/

// NORMAL FUNCTION FOR ADDING 2 NUMBERS
function addTwo(n1, n2) {
    return (n1 + n2);
}

// ARROW FUNCTION
const letsAddTwo = (n1, n2) => {
    return (n1 + n2);
}

// Calling Them
addTwo(1, 1);
letsAddTwo(1, 1);