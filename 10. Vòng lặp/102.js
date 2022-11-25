// Vòng lặp do...while



var i= 0;

do {
    i++;
    console.log(i)
} while (i < 10);



var i= 0;
var isSuccess= false;

do {
    i++;
    console.log('nạp thẻ lần '+ i)

    if(false) {
        isSuccess = true
    }
} while (!isSuccess && i< 3);