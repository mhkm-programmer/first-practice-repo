function isEven(number) {
    const remider = number % 2;
    if (remider === 0) {
        return true;
    } else {
        return false;
    }
}

const myNumber = isEven(2020);
console.log("Is even number?", myNumber);