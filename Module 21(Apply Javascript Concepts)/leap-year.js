function isLeapYear(year) {
    const remidered = year % 4;
    if (remidered === 0) {
        return true;
    } else {
        return false;
    }
}

const checkYear = isLeapYear(2021);
console.log(checkYear);