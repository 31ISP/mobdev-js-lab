const array = [4, 5, 3, 5, 2, 4, 5, 3];
const avg = array.reduce(function(acc,item,index, arr) {
    sum = acc + item;
    if(index == arr.length){
        return sum / arr.length
    }
    return sum;
})
console.log(avg);
//=========================================
const modified_estimates = array.filter(n => n>3).map(n => `Оценка ${n}`);
console.log(modified_estimates);
//=========================================
const fruits = ["банан", "яблоко", "вишня", "абрикос", "груша"];
console.log(fruits.sort().join(","));
//============================================================
const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
];

// 1. Товары дешевле 10 000 ₽ (filter)
const cheapProducts = products.filter(product => product.price < 10000);
console.log("Товары дешевле 10000 ₽:", cheapProducts);

// 2. Только названия товаров (map)
const productNames = products.map(product => product.name);
console.log("Названия товаров:", productNames);

// 3. Суммарная стоимость всех товаров (reduce)
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Суммарная стоимость всех товаров:", totalPrice, "₽");
//============================================================

const array2 = [12, 45, 7, 33, 18];
//some хоть одно число больше 40?
console.log(array2.some(n => n>40));
//every Все ли числа больше 5?
console.log(array2.every(n => n>5));
















