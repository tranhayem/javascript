/**
 * Làm việc với mảng
 * 
 * 1. To string
 * 2. Join
 * 3. Pop
 * 4. Push
 * 5. Shift
 * 6. Unshift
 * 7. Splicing
 * 8. Concat
 * 9. Slicing
 */

// To string
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo'
];
console.log(languages.toString()) // biến đổi mảng thành string

// Join
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo'
];
console.log(languages.join('--')) // nối nội dung

// Pop
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo'
];
console.log(languages.pop()) // xóa element cuối cùng của mảng và trả về phần tử đã xóa
console.log(languages)

// Push
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo'
];
console.log(languages.push('PHPicachu')) // thêm element vào vị trí cuối cùng của mảng và trả về 
console.log(languages)

// Shift
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo'
];
console.log(languages.shift()) // xóa element đầu của mảng và trả về phần tử đã xóa
console.log(languages)

// Unshift
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo',
];
console.log(languages.unshift('Pascalol')) // thêm element vào vị trí cuối cùng của mảng và trả về số phần tử của mảng
console.log(languages)

// Splicing
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo',
];
languages.splice(1, 0, 'VietDragon')
// số đầu tiên: vị trí bắt đầu, số thứ hai: số phần tử bị xóa sau phần tử bắt đầu
// các element sau: thêm các element sau khi xóa
console.log(languages)

// Concat
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo',
];
var languages2= [
    'GoDz',
    'G-fam',
    'GVR'
];
console.log(languages.concat(languages2)) // mảng gốc trước concat, mảng sau trong concat

// Slicing
var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo',
];
console.log(languages.slice(1, 2)) // cắt mảng và hiện ra mảng bị cắt
// số thứ nhất: vị trí bắt đầu
// số thứ hai: cắt đến trước vị trí đó. nếu không điền số thứ hai thì sẽ cắt hết từ vị trí bắt đầu
// slice(0): coppy mảng