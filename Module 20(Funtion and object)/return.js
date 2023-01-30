function bannana(money) {
  var bannanaPrice = 20;
  var bannanaQuentity = money / bannanaPrice;
  return bannanaQuentity;
}

var bannanas = bannana(500);
console.log("Total", bannanas);
