// Vòng lặp for...in

// for in dùng để lấy key

var myInfo= {
    name: 'Trần Dương',
    age: 20,
    address: '175, Tây Sơn, Đống Đa, Hà Nội'
};

for( var key in myInfo){
    console.log(key)
    console.log(myInfo[key])
}

var languages= [
    'Javalorant',
    'HTMLMHT',
    'Cssgo'
];

for(var key in languages) {
    console.log(languages[key])
}

