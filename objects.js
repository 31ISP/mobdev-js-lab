const book = {
  title: "Мастер и Маргарита",
  author: "Булгаков М.А",
  year: 1967,
  pages: 480,
  available: true,
  info() {
    return `<<${this.title}>>, ${this.author}, ${this.year}, ${this.pages}`
  }
};
console.log(book.info());
//========================================
const{title,author,rating=0} = book;
console.log(`title: ${title} ; author: ${author} ; rating: ${rating}`);
//=============================================\
const students = [
  { name: "Анна", grade: 4.8, passed: true },
  { name: "Борис", grade: 2.9, passed: false },
  { name: "Вера", grade: 3.5, passed: true },
  { name: "Григорий", grade: 4.1, passed: true },
  { name: "Дарья", grade: 2.5, passed: false },
]
console.log(students.filter(n => n.passed).map(n => n.name));

//оценка выше 4.5
console.log(students.find(n => n.grade > 4.5));
//средний бал
const avg = students.map(n => n.grade).reduce(function(acc,item,index,arr){
    let sum = acc + item;
    if(index == arr.length){
        return sum / arr.length;
    }
    return sum;
})
console.log(avg.toFixed(1));
//==================================================================================
function mergeUsers(user1, user2) {
  return { ...user1, ...user2 }; 
}

const u1 = { name: "Иван", age: 20, city: "Казань" };
const u2 = { name: "Иван Петров", email: "ivan@mail.ru", city: "Москва" };

console.log(mergeUsers(u1,u2))


//====================\

function countByField(arr, field){
    let countTrue =0,countFalse = 0;
   arr.forEach(item => {
  if (item[field]) {
    countTrue++;
  } else {
    countFalse++;
  }
});
    return {true:countTrue, false:countFalse};
}
console.log(countByField(students,"passed"));













