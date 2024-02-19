// Objective: to print sum of all the numbers from 1 to n

let sum = 0;
let n = 10;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log(`Sum of digits from 1 to ${n} is ${sum}`);