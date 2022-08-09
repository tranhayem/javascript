// Comment trong js
// 1. Mục đích sử dụng
// - ghi chú
// - vô hiệu hóa mã 
// 2. Loại Comments
// - Comment 1 dòng
// - Comment nhiều dòng
// 3. Sử dụng phím tắt
// - window: ctrl + /
// - macos: comman + /

/**
 * giới thiệu một số hàm built-in
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout- chạy 1 đoạn code sau 1 khoảng thời gian
 * 6. Set interval- chạy định kỳ 1 đoạn code sau 1 khoảng thời gian
 */

/**
 * toan tu trong javascript
 * 1. toán tử số học- arithmetic( cac phep tinh +; -; *; **; /; %; ++; --)
 * 2. toán tử gán- assignment( =; +=; -=; *=; /=; **=)
 * 3. toán tử so sánh- comparison( ==; !=; >; <; >=; <=; so sánh tuyệt đối ===; !==)
 * 4. toán tử logic- logical( &&; ||; !)
 */

/**
 * Boolean
var a =1;
var b =2;
var isSuccess = a > b;
console.log(isSuccess);
 */

/**
 * if- else
 */

/**
 * các giá trị js
 * 0
 * false
 * '' -""
 * undefined
 * NaN
 * null
 */

/**
 * kiểu dữ liệu trong js
 * 1. dữ liệu nguyên thủy- primitive data
 *  number- số
 *  string- chuỗi( ''; "")
 *  boolean- on hoặc off( true; false)
 *  underfined- không gán giá trị( vd: var age;)
 *  null- gán giá trị bằng null;
 *  symbol- gán giá trị bằng Symbol(' ');
 * 2. dữ liệu phức tạp- complex data
 *  function
 *  object- lưu thông tin
 *          var myObject = { name:'', age: ,...};
 *          var myArray = ['','','',...];
 * 3. kiểm tra kiểu dữ liệu
 *  console.log(typeof );
 *  đặc biệt: console.log(typeof null); = object
 */

var a=1;
var b=2;
var c=3;
if(a>0 && b >0){
    console.log('dieu kien dung');
    
}