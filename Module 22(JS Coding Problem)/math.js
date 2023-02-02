var maleAge = 25;
var femaleAge = 35;

const gap = Math.abs(maleAge - femaleAge);

if (gap < 5) {
  console.log("Ýou can doing wither friends");
} else {
  console.log("Warring!! No friends");
}

console.log(gap);

for (let i = 0; i < 100; i++) {
    const friend = Math.round(Math.random() *100);
    console.log(friend);
}