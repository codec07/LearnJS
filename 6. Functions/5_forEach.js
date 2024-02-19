// This is an important concept
// Let's understand by a small project

/*
OBJECTIVE:
Create an array and use forEach to detect and print vowels in each element
*/

let arr = ["india", "united states of america", "china", "united kingdom", "dubai"];

arr.forEach((val) => {
    let counts = 0;
    for (let i of val) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            counts += 1;
        }
    }
    console.log(`${val} has ${counts} vowels out of ${val.length}\n`);
})