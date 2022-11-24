// Toán tử 3 ngôi (Ternary operator)

var course= {
    name: 'GoDz',
    coin: 250
}

if(course.coin>0) {
    console.log(`${course.coin} coins`);
} else {
    console.log('free')
}

var result= course.coin > 0 ? `${course.coin} coins` : 'free'
console.log(result)