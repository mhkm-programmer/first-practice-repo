/* 
truthy = 'string', 5, true ,{}, []

e.g. 
let myVar = 5;
if (myVar) {
    myVar = myVar *10;
} else {
    myVar = 0;
}

falsy = '', false, , null , undefined

let myMoney = 50;
if(!myMoney){

}

shortcut truthy and falsy 
let food = money > 100 ? 'coke' : 'cha';
let drink = (money > 100 && myVar >100) ? 'coke' : 'mineral water';

shortcut string to number covert
const number = 50;
const numStr = number + ' ';

shortcut number to string  covert
const number1 = '500';
const number1Num = +number;

shortcut truthy and falsy function callings
const isActive = false/true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');

isActive ? showUser() : hideUser();
ANOTHER SHORTCUT        
isActive && showUser() //if the left side is active and right side show
isActive || hideUser() //if the left side is active and right side show

// toggle boolean
let isActive = true/false;
isActive = !isActive;

*/
