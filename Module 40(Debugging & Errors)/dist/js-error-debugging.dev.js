"use strict";

// Syntax Error....
function isSmaller(num) {
  if (num < 10) {
    return true;
  } else return false;
} // }  this is error


var result = isSmaller(12); // console.log(result);
// const number = [21,545,65,45 21,21];

var number = [21, 545, 65, 45, 21, 21]; // console.log(number);

number.map(function (a) {// console.log(a);
}); // Type error

var a = 'kamal';
var b = 'jaka'; // console.log(closed);
// Reference error 

function add(n1, n2) {
  return n1 + ' ' + n2;
} // console.log(add1(3,4)); 
// console.log(add(3,4)); 


var name = 'John';

name.toUpperCase = function () {
  return 'JOHN';
};

console.log(name.toUpperCase());
var arr = [1, 2, 3];
var toy = arr.slice(-2, 0);
console.log(toy);
var greeting = 'Hello, world!';
console.log(greeting);