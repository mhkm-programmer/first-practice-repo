function bannana(money) {
  var bannanaPrice = 20;
  var bannanaQuentity = money / bannanaPrice;
  return bannanaQuentity;
}

var bannanas = bannana(500);
console.log("Total", bannanas);


function grtAverage(assignments1, assignments2, assignments3) {
    const total = assignments1 + assignments2 + assignments3;
    const average = total / 3;
    return average;
    // return (assignments1 + assignments2 + assignments3) / 3;
    
}

var myAverage = grtAverage(60, 60, 58);
console.log(myAverage.toFixed(2));

function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
    // return num1 + num2;



var result1 = add(25, 98);
var result2 = add(58, 54);
console.log(result1);
console.log(result2);
console.log(result1 + result2);


