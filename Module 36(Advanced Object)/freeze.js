const glass = {
  color: "red",
  price: 349,
  iscleaned: false,
  capacity: 1,
};

// Get the keys from object
const keys = Object.keys(glass);
console.log(glass);

// Get the values from object
const values = Object.values(glass);
console.log(values);

// Get the keys and values from the object
const pairs = Object.entries(glass);
console.log(pairs);

// Delete the keys & values from the object
delete glass.iscleaned;
console.log(glass);

// Add new keys and values to the object
glass.height = 10;
console.log(glass);

//Seal the object
Object.seal(glass);
console.log(glass);

//Freeze the object
Object.freeze(glass);
console.log(glass);



