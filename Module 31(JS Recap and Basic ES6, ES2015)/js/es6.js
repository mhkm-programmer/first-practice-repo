function add(num1=0, num2=0, num3=0) {
    const sum = num1 + num2 + num3;
    return sum
}

const result = add(20,10,5454.2);

// console.log(result);

const a = 10;
const b = 50;

const message = `This the number is ${a} and ${b} and returns ${result}`;

// console.log(message);

const add1 = (a, b) => a + b;
// console.log(add1(10,2));

const num = num => num + num;

// console.log(num(5));

//Spread out

const ab = [12, 54, 65, 45, 45, 88];

const bc = [4554, 445, 45487, ...ab, 45, 78];

// console.log(ab);
// console.log(bc);

// Destructuring


const {age,price, color} = {age:56, price:522, color:"red", profession:"service"};

// console.log(age);


const [acd,bdf,click] = [45,78,45,'johnd'];

// console.log(click);

function ehan() {
    return ['alim','john','rohn']
}

const [af,bd,d] = ehan();

// console.log(bd);






