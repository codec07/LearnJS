// First Create an Object
let emp = {
    uname: "Aarush Mehta",
    age: 21,
    isHired: true,
    role: "Marketing Specialist"
}

// Declare a For Loop and replace 'of' with 'in'
for (let i in emp) {
    console.log(`${emp[i]}`);
}