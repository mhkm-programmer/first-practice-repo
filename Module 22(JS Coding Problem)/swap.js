let first = 5;
let second = 6;
let third = 7;


const temp = first;
first = second;
second = temp;

console.log(first, second);

// approch Desturting

[first, second] = [first, second];
console.log(first, second);