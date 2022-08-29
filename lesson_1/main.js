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
 * cú pháp:
 * if () {
 * } else {
 * };
 * cách viết đơn giản: 
 * var biến = điều kiện ? " " : " "; nếu là true thì in ra chuỗi sau ?; false thì in ra chuỗi sau :
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

/**
 * hiểu hơn về câu điều kiện và phép so sánh
 * 
 */

/**
 * hàm( funciton) trong js
 * 1. hàm
 *  một khối mã
 *  làm 1 việc cụ thể
 * 2. loại hàm
 *  built-in
 *  tự định nghĩa
 * 3. tính chất
 *  không thực thi khi định nghĩa
 *  sẽ thực thi khi được gọi
 *  có thể nhận tham số
 *  có thể trả về 1 giá trị
 * 4. tạo hàm đầu tiên
 * 
 * 
 */

/**
 * tham số hàm
 * 1. tham số
 *  định nghĩa
 *  kiểu dữ liệu: không giới hạn
 *  tính private
 *  1 tham số
 *  nhiều tham số
 * 2. truyền tham số
 *  1 tham số
 *  nhiều tham số
 * 3. arguments
 *  đối tượng arguments
 *  giới thiệu vòng for
 */
var tnd = {
    name: 'tnd',
    age: 21,
    where: 'tb',
}
console.log(tnd)