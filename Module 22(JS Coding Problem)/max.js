// // const jim = 85;
// // const dela = 86;
// // const john = 87;

// function winner(jim, dela, john) {
//   if (jim > dela && jim > john) {
//     console.log("Jim is winner");
//   } else if (dela > jim && dela > john) {
//     console.log("Dela is winner");
//   } else if (john > dela && john > jim) {
//     console.log("John is winner");
//   }
//   return winner;
// }

// let numbers = winner(58, 56, 45);
// // console.log(numbers)

// function maxNumber(num1, num2, num3) {
//   let numbers = Math.max(num1, num2, num3);
//   return numbers;
// }

// let number = maxNumber(58, 56, 405);
// console.log(number)

// lowest Height 

function maxHeight1(numbers2) {
    let lowNumber = numbers2[0];
  for (let k = 0; k > numbers2.length; k--) {
    const index1 = k;
    const element1 = numbers2[index1];
    if (element1 > lowNumber) {
      lowNumber = element1;
    }
  }
  return lowNumber;
}

// Hihest Height 

let lowHeights = [522, 562, 456, 456];
let lowestNum = maxHeight1(lowHeights);
console.log(lowestNum);




function maxHeight(numbers1) {
    let largestNumber = numbers1[0];
  for (let i = 0; i < numbers1.length; i++) {
    const index = i;
    const element = numbers1[index];
    if (element > largestNumber) {
      largestNumber = element;
    }
  }
  return largestNumber;
}

let heights = [522, 562, 456, 456];
let max = maxHeight(heights);
console.log(max);
