// Factorial  by for loop

function factorialNumber(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }

  return result;
}

const result = factorialNumber(6);
console.log(result);

// Factorial  by while loop

function factorial(number) {
  let i = number;
  let result = 1;
  while (i > 1) {
    result = result * i;
    i--;
  }
  return result;
}

const myNumber = factorial(5);
console.log(myNumber);

// Factorial reverse by for loop

function factorialNumber(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }

  return result;
}

const output = factorialNumber(10);
console.log(output);

// Factorial reverse by while loop

function fact(num) {
  let i = num;
  let result = 1;
  while (i >= 1) {
    result += i;
    i--;
  }
  return result;
}

const myNum = fact(7);
console.log(myNum);
