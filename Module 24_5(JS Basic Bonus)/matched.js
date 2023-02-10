const numbers1 = [
  45,
  56,
  45,
  564,
  21,
  56,
  { id: 1, name: "John", age: 30, price: 21555 },
];

for (const element of numbers1) {
  // console.log(element);
}

const numbers2 = [45, 56, 45, 564, 21, 56];

const products = [
  { id: 1, name: "johndoe phone", quantity: 250, price: 2580 },
  { id: 2, name: "Johndoe Phone", quantity: 2510, price: 5250 },
  { id: 3, name: "hndoe phone", quantity: 20, price: 256 },
  { id: 4, name: "ndoe phone", quantity: 2500, price: 2510 },
  { id: 5, name: "ohndoe PHONE", quantity: 2250, price: 2550 },
];

function matchProducts(products, search) {
  const match = [];
  for (const product of products) {
    if (product.name.toLowerCase().includes(search.toLowerCase())) {
      match.push(product);
    }
  }
  return match;
}

// const result = matchProducts(products, "phone");
// console.log(result);



function compare(a, b) {

  if (a == b) {
 
  return true;
 
  } else {
 
  return false;
 
  }
 
 }
 
//  const result = compare(15, "15");
 
//  console.log(result);


function compare(a, b) {

  if (a.toString() === b) {
 
  return true;
 
  } else {
 
  return false;
 
  }
 
 }
 
 const result = compare(25, 25);
 
 console.log(result);
 
 