// num = 15
// if(num >= 10){
//     console.log('this is 5');
// }
// else('This is not number')

// // Both value check true or wrong

// var num1 = 29;
// var num2 = 51;

// if(num1 == 59 && num2 == 51){
//     console.log('Both number is true');
// } else{
//     console.log('Anyone or both number is wrong');
// }

// // Anyone value check

// var number1 = 49;
// var number2 = 53;

// if (number1 >= 50 || number2 <= 50){
//     console.log('Value is right');
// } else{
//     console.log('Value is not match');
// }

// var num1 = 100;
// var num2 = 200;
// var num3 = 300;

// if(num1>num2 && num1>num3){
//     console.log('Number 1 is big');
// } else if (num2>num3) {
//     console.log('Number 2 is big');
// } else { console.log('Number 3 is big');

// }

// Nested Condition

// var number = 300;

// if (number == 30) {
//     if (typeof number == 'string') {
//         console.log('This is 30');
//     } else {
//         console.log('Variable is 30');
//     }
// } else {
//     console.log('This is not equal variable');
// }

// Even number or Odd Number Check

// var num = 98;

// if (num%2 ==0) {
//     console.log('This is Even number');
// } else {
//     console.log('This is Odd number');
// }


// Grading Number 

var result = 10;

if (result > 100) {
    console.log('Error Number Input');
} else if(result <= 100 && result >=0){
    if (result >= 0 && result < 33) {
        console.log('You get F grade');
    }
    else if(result > 32 && result < 50){
        console.log('Your result is D grade');
    }
    else if(result > 49 && result < 60){
        console.log('Your result is B Grade');
    }
    else if(result > 59 && result < 70){
        console.log('Your result is A-');
    }
    else if(result > 69 && result < 80){
        console.log('You get A grade');
    }
    else if (result > 79 && result < 100) {
        console.log('This Letter Mark means A+ grade');
    }
} else{
    console.log('Negative value not acceptable');
}