// Đối tượng Date

var date= new Date();

var year= date.getFullYear();
var month= date.getMonth()+ 1; // date.getMonth() trả về 0-11
var day= date.getDay();
var hour= date.getHours();
var minutes= date.getMinutes();
var seconds= date.getSeconds();

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(`${day}/${month}/${year}`);

// từ khóa: javascript date object mozilla
// link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date