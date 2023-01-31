const array = [1, 2, 3, 4, 5, 6];

function sumArray(array) {
    let sum = 0;
for (let i = 0; i <= array; i++) {
    const element = array[i];
    sum = sum + element;
    // console.log(sum);
    
}

    return sum;
}

const sum = sumArray(array)
console.log(sum);