let username = "Aarush Mehta"
let chars = 0;

for (let i of username) {
    chars++;
}

console.log(`The name '${username}' contains ${chars - 1} letters`);