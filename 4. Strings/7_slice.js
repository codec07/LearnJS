// Slice is used to get a part of a string

let str = 'GoodBoyAarush';

// For exmaple from 1st letter 'G' to 7th letter 'y'
// if i also want to include 'y' in the sliced string. i must slice till 8th letter

let sliced = str.slice(0, 7);
console.log(sliced);

// The ending value is not compulsory and when not specified, will continue till end

let sliced2 = str.slice(7);
console.log(sliced2);