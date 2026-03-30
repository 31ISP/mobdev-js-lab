//раздел 1 числа

//1.
const temperature = 36.6789
const cut = temperature.toFixed(1)
console.log(cut)

//2.
const a = 17
const b = 5
const result1 = a % b
const result = Math.floor(a / b)
console.log(result)
console.log(result1)

//3.
const rdm1 = Math.floor((Math.random() * 10) + 1 )
console.log(rdm1)

//4.
console.log(isNaN("100" / 5))
console.log(isNaN("сто" / 5))


//5.

console.log(Math.min(14, -3, 77, 0, -100, 42))
console.log(Math.max(14, -3, 77, 0, -100, 42))

//раздел 2 строки

//1.

const sentence = " javascript — это просто! ".trim()//.trim() "  убираем пробелы по краям  "
const sentence1 = sentence[0].toUpperCase()//берём букву "j" при помощи sentence[0]
const sentence2 = sentence.slice(1) //отрезок "avascript — это просто!"
const sentence3 = sentence1 + sentence2
console.log(sentence3)

//2.

const Firstname = "Иванов Иван"
const group = "ИСР-21"
const MiddlePoint = "4.75"

const fullString = `Студент ${Firstname}, группа ${group}, средний балл: ${MiddlePoint}`

console.log(fullString)

//3.

const Data = "2025-03-15".split("-")
const Data1 = `${Data[2]}.${Data[1]}.${Data[0]}`
console.log(Data1)

//4.

const Str = "Node.js разработчик"
console.log(Str.startsWith("Node"))
console.log(Str.endsWith("разработчик"))

//5.

const FT = "42"
const Zer = "0".repeat(6)
const res = Zer + FT
console.log(res)

//Раздел 3 массивы

//1.
const score = [4, 5, 3, 5, 2, 4, 5, 3]
const leight = score.length
const score1 = score.reduce((acc, n) => acc + n, 0)
const score2 = score1 / leight
const score3 = score2.toFixed(2)
console.log(score3)

//2.
const score4 = score.filter(n => n > 3)
const score5 = score4.map(n => n = 5)
console.log(score5)

//3.
const str = ["банан", "яблоко", "вишня", "абрикос", "груша"]
const str2 = str.sort()
console.log(str2.join(", "))

//4.
const products = [
      { name: "Ноутбук", price: 75000 },
      { name: "Мышь", price: 1500 },
      { name: "Монитор", price: 32000 },
      { name: "Клавиатура", price: 3500 },
      { name: "Наушники", price: 8000 }
    ]
const products1 = products.filter(n => n.price < 10000)
console.log(products1)
const products2 = products.map(n => n.name)
console.log(products2)
console.log(products.reduce((acc, n ) => acc + n.price, 0))

//5.
const msv = [12, 45, 7, 33, 18]
console.log(msv.some(n => n > 40))
console.log(msv.every(n=>n>5))

//раздел 4 объекты

//1.
const book = {title: "«Мастер и Маргарита»", 
    author: "Булгаков М.А.", 
    year: "1967 г.", 
    pages: "480 стр.",
    available: true}
book.info = function() {
    return `${this.title}, ${this.author}, ${this.year}, ${this.pages}`

} 
console.log(book.info())

//2.
const { title, author, rating = 0} = book
console.log(title + ", " + author + ": " + rating)

//3.
const studentsT = [
      { name: "Анна", grade: 4.8, passed: true },
      { name: "Борис", grade: 2.9, passed: false },
      { name: "Вера", grade: 3.5, passed: true },
      { name: "Григорий", grade: 4.1, passed: true },
      { name: "Дарья", grade: 2.5, passed: false },
    ]
const studentsT1 = studentsT.filter(n => n.passed)
const stT2 = studentsT1.map(n => n.name)
const stT3 = studentsT.find(n => n.grade > 4.5)
const AvSc = studentsT.reduce((acc, n)=> acc + n.grade, 0)
console.log(stT2)
console.log(stT3.name)
console.log(AvSc)

//4.

function mergeUsers(users1, users2){
    return {...users1, ...users2}
}
const u1 = { name: "Иван", age: 20, city: "Казань" }
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" }

console.log(mergeUsers(u1, u2))

//5.

function countByField(arr, field){
const counter = {}
arr.forEach(element => {
    const value = element[field]
    if (counter[value] === undefined) {
    counter[value] = 1;   
} else {
    counter[value]++;     
}

});
return counter;
}

console.log(countByField(studentsT, "passed"));

//console.log(isNaN("1202" / 2))
//console.log(isNaN("hello" / 5))
//const rdm = Math.random()
//const dap = rdm * 10
//const res = dap.toFixed(0)
//console.log(res)


//const tst = 14.6788
//const nm = tst.toFixed(1)
//console.log(nm)
//const tst1 = 9.99999
//const name1 = tst1.toFixed(1)
//console.log(name1)
//const tst2 = 8.2133131
//const name2 = tst.toFixed(4)
//console.log(name2)
//const T = 5
//const H = 4
//const Res = Math.floor(T / H)
//console.log(Res)



