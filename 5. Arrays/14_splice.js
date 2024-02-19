// Used to add, remove and replace elements at the same time
// Format: arr.splice(startIndex, deleteCount, newElement1, newElement2, ...);

let fruits = ['apple', 'banana', 'mango', 'watermelon', 'papaya', 'orange'];
console.log(fruits);

fruits.splice(2, 2, 'fruit1', 'fruit2');
// Here above, we wrote that from the index '2' delete '2' elements and replace them with
// fruit1 and fruit2
console.log(fruits);