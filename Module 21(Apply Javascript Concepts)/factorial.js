

function sumOfNumber(numbers) {
    let sum = 0;
    for (let i = 1; i <= 7; i++) {
        sum += i;
        console.log(i, sum);
    }
    return sum;
    }
  

const myNumbers = sumOfNumber(7);

// function factorial(numbers) {
//     let result = 1;
//     for (let i = numbers - 1; i >= 1; i--) {
//         result *= i;
//     }
//     return numbers;
// }

// const myNumbers = factorial(7);
// console.log(myNumbers);
