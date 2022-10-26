// Nguyên lý hoạt động của ++ / --

// Toán tử ++ --
// Prefix(tiền tố) & Postfix(hậu tố)


// Prefix
var a= 5;

var output= ++a;
// Việc 1: +1 cho a, a= a+ 1=> a= 6
// Việc 2: Trả về a sau khi được +1
console.log(a)

// Postfix
var a= 5;

var output= a++;
// Việc 1: Coppy biến a, `a coppy` = 5
// Việc 2: +1 của a, a= a+ 1=> a= 6
// Việc 3: Trả về `a coppy`
console.log(a)

// Ví dụ:
var number= 6

var output= number++ + --number;
//             6     +  (7- 1)

var output= ++number * 2 - number-- * 2;
//              7    * 2 - 7        * 2
console.log('output: ', output)