// Math object

/**
 * Math.PI
 * Math.round
 * Math.abs
 * Math.ceil
 * Math.floor
 * Math.random
 * Math.min
 * Math.max
 */

console.log(Math.PI); // trả về số pi
console.log(Math.round(2.5)); // làm tròn số
console.log(Math.abs(-5)) // trả về trị tuyệt đối
console.log(Math.ceil(5.0000000000001)) // làm tròn trên
console.log(Math.floor(4.9999999999999)) // làm tròn dưới
console.log(Math.random()) // trả về số thập phân ngẫu nhiên nhỏ hơn 1
console.log(Math.floor(Math.random()* 5)) // random số ngẫu nhiên
console.log(Math.min(-1231, 123, 31231, -123124, 123413)) // trả về số nhỏ nhất
console.log(Math.max(-1231, 123, 31231, -123124, 123413)) // trả về số nhỏ nhất

var random= Math.floor(Math.random()* 5);
var bonus= [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
];
console.log(bonus[random]) // random 1 trong các giá trị


var random= Math.floor(Math.random()* 100);
if(random<5) {
    console.log('Cường hóa thành công')
}