/*
Objective:
There is an array,
All items have 10% discount
Change the current array price and store the new value after the offer
also tell the total amount after discount to pay;

HINT: USE 'FOR OF'
*/

let prices = [250, 645, 300, 900, 50];
let sum = 0;

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10;
    prices[i] -= offer;
    sum += prices[i];
}

console.log(prices, ' = ', sum);