// Objective: Find Percentage of below arr by using for loop

let marks = [89, 92, 93, 97, 98, 73, 82, 99, 100, 77] // Total - 900
let sum = 0;

for (let mark of marks) {
    sum += mark;
}

let percent = (sum / 10)
console.log(`${percent}%`);