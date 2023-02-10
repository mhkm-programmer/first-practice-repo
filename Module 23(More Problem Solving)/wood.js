


function woodConverter(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    return (chairQuantity * perChairWood) + (tableQuantity * perTableWood) + (bedQuantity * perBedWood)
}

console.log(woodConverter(10, 10, 10));