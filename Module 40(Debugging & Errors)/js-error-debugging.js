// Syntax Error....
function isSmaller(num){
    if(num < 10){
        return true;
    } else return false;
    }

// }  this is error
const result = isSmaller(12);
// console.log(result);

// const number = [21,545,65,45 21,21];
const number = [21,545,65,45, 21,21];
// console.log(number);

number.map(a=>{
    // console.log(a);
   

});

// Type error

const a = 'kamal';
const b = 'jaka';
// console.log(closed);

// Reference error 
function add(n1,n2) {
    return n1 + ' ' + n2;
}

// console.log(add1(3,4)); 
// console.log(add(3,4)); 

const name = 'John';
name.toUpperCase = () => 'JOHN';
console.log(name.toUpperCase());
const arr = [1, 2, 3];
const toy = arr.slice(-2, 0);
console.log(toy);

const greeting = 'Hello, world!';
console.log(greeting);