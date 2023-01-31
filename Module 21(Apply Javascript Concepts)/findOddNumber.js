function findOddNumber(numbers) {
    const oddNumber = [];
    // const evenNumber = [];
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {

        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            console.log(index, element);
            oddNumber.push(element);
            sum += element;
        // } else if(element % 2 === 0) {
        //     console.log(index, element);
        //     evenNumber.push(element);
        // }
        

        // if (numbers[i] % 2!== 0) {
        //     oddNumber.push(numbers[i]);
        // } else {
        //     evenNumber.push(numbers[i]);
        // }
    }
    return oddNumber;
    // return [oddNumber, evenNumber];
    // return {
    //     "OddNumber": oddNumber,
    //     "EvenNumber": evenNumber
    // };
    
        }
}

const myOddNumber = findOddNumber(oddNumber);
console.log(findOddNumber([1, 2, 3, 4, 25, 30, 40, 50]));
console.log(myOddNumber);