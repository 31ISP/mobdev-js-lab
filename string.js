const sentence = " javascript — это просто! ";
console.log(sentence.trim().slice(0,1).toUpperCase() + sentence.trim().slice(1));
// ==========================================================
const student = {
    lastName : "Иванов Иван",
    group : "ИСР-21",
    AvgScore : 4.75
}
const {lastName,group,AvgScore} = student;
console.log(`Cтудент ${lastName}, группа ${group}, средний бал ${AvgScore}`);
// ==========================================================
const dataTimeText = "2025-03-15";
console.log(`${dataTimeText.split("-").reverse().join(".")}`);
// ==========================================================
const developer = "Node.js разработчик".trim();

console.log(` Начинается со слова Node ${developer.startsWith("Node")}; заканчиваестя со слова разработчик ${developer.endsWith("разработчик")}`);
// ==========================================================
console.log("42".padStart(8,"0"));
