const temperature = 36.6789;
console.log(temperature.toFixed(1));
// ====================================
const a = 17, b = 5;
console.log(Math.floor(a%b));
// ====================================
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);
// ====================================
console.log(`isNaN("100"/ 5) : ${isNaN("100"/ 5)}; isNaN("сто"/ 5) : ${isNaN("сто"/ 5)}`);
// ====================================
const array = [14, -3, 77, 0, -100, 42];
console.log(`min : ${Math.min(...array)}; max : ${Math.max(...array)}`);
// ====================================

