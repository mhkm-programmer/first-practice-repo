var myComputer = {
  brand: "Microsoft",
  model: "Windows 10",
  price: 1000000000000,
  color: "black",
  processo: "i7",
  ram: 2048,
};

// myComputer.brand = "Apple";
// myComputer['color']= 'white';
// myComputer['brand'] = "Samsung";

// myComputer.color = "Red";
// console.log(myComputer);
// console.log(myComputer.color);

// for (let i = 0; i < myComputer.length; i++) {
//     const element = myComputer[i];
//     const value = myComputer[element];   
// }



// Find out Objects properties

 const keys = Object.keys(myComputer);
 console.log(keys);

 for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    const properties = keys[i];
    const values = myComputer[properties];
    console.log(properties, values);
    
 }


 for (const properties in myComputer) {
    const values = myComputer[properties];
    console.log(properties, values);
     
    }
 


//  Find out Object values

 const values = Object.values(myComputer);
 console.log(values);

// for (const keys in myComputer) {
//     if (Object.hasOwnProperty.call(object, myComputer)) {
//         const element = object[myComputer];
        
//     }
// }
// console.log(myComputer, value);