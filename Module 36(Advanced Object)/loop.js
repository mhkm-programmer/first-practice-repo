const glass = {
    color: "red",
    price: 349,
    iscleaned: false,
    capacity: 1,
  };
// Used to calculate
  for (const key in glass) {
    const value = glass[key];
    console.log(key, value);
        
    }
//Advanced Operations
   for(const [key,value] of Object.entries(glass)){
    console.log(key, value);
   } 
  