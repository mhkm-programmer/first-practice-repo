const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];

function doubleReturn(numbers) {
  const doubleNumber = [];
  for (const number of numbers) {
    const double = number * 2;
    doubleNumber.push(double);
  }
  return doubleNumber;
}

// console.log(doubleReturn(numbers));

const makeDouble = numbers.map((x) => x * 2);

// console.log(makeDouble);

//direct console log................................................................

// console.log((numbers).map(x=>{
//     return x*2;
// }));

// alert((numbers).map(x=>{
//     return x*2;
// }));

const product = [
  { name: "john", age: 30 },
  { name: "karim", age: 20 },
  { name: "ohn", age: 50 },
];

const make = product.map((x) => x.age);
const names = product.map((x) => x.name.length);

const cheap = product.filter((x) => x.age > 20);
// console.log(cheap);
// console.log(make);
// console.log(names);

// for each product

// product.forEach(x => console.log(x));

//Filter from the number of products

const numbers1 = [54, 10, 52, 12, 45, 63, 5, 8, 10];
const numbers2 = numbers1.filter((x) => x % 2 === 0);
const numbers3 = numbers1.filter((x) => x % 2 !== 0);
const numbers4 = numbers1.filter((x) => x >= 40);
const numbers5 = numbers1.filter((x) => x <= 40);
// console.log(numbers5);

// find the number from .....

const allNumber = numbers1.filter((x) =>x%2 ===0);
const eachNumber = numbers1.find((x) =>x%2 ===0);

console.log(eachNumber);
console.log(allNumber);
console.log(eachNumber, allNumber);



