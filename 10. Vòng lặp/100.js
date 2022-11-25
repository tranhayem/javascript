// Vòng lặp for... of

// for of dùng để lấy giá trị

var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo'
];

for(var value of languages) {
    console.log(value);
}

var myInfo= {
    name: 'Trần Dương',
    age: 20,
    address: '175, Tây Sơn, Đống Đa, Hà Nội'
};

for(var value of Object.keys(myInfo)) {
    console.log(value); // lấy key trong object
    console.log(myInfo[value]); // lấy giá trị trong object
}

console.log(Object.values(myInfo)); // trả về 1 mảng là các value

for(var value of Object.values(myInfo)) {
    console.log(value); // lấy giá trị trong object
}