function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        // sum += numbers[i];
        // console.log(sum);
        const index = i;
        const element = numbers[index];
        // sum += element; or
        sum = sum + element;
        console.log(index, element, sum);
 
    }
    return sum;
}

const myNumber = [20, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63];
sumArray(myNumber);