let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

let sum2 = 0;
for (let i = 5; i >= 1; i--) {
  sum2 = sum2 + i;
}

function sum3(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum3(i - 1);
}

console.log(sum3(5));
