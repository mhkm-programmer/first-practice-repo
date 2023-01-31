// Feet to Inches
function feetConverter(inches) {
  const feet = inches / 12;
  return feet;
}

const dadaInches = 144;
const dadaFeet = feetConverter(dadaInches);
console.log(dadaFeet);

// Miles to Kilometers

function milesConverter(miles) {
  return miles / 1.609;

  // const kilometers = miles/1.609;
  // return kilometers;
}

const dadaMiles = 10;
const dadaKilometers = milesConverter(dadaMiles);
console.log(dadaKilometers.toFixed(2), "Kilometers");


// Kilograms to Gram Conversation

function kilogramsConverter(gram) {
    return gram * 0.001;
}

const dadaGrams = 500;
const dadaKilograms = kilogramsConverter(dadaGrams);

console.log(dadaKilograms.toFixed(2), "Grams");
