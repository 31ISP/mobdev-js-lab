//задание 1

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

//задание 2

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



