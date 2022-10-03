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
 * 
 * 1. Alert- hiển thị bảng thông báo nhỏ cho người dùng
 * 2. Console- 
 * 3. Confirm- hiển thị thông báo cho người dùng xác nhận
 * 4. Prompt- được sử dụng để hiển thị thông báo cho người dùng nhập vào một thông tin.
 *            Popup này sẽ có hai nút cho người dùng OK và Cancel.
 * 5. Set timeout- chạy 1 đoạn code sau 1 khoảng thời gian
 * 6. Set interval- chạy định kỳ 1 đoạn code sau 1 khoảng thời gian
 */

/**
 * toan tu trong javascript
 * 
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
 * kiểu dữ liệu trong js- data type
 * 
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
 *  console.log(typeof biến);
 *  đặc biệt: console.log(typeof null); = object
 */

/**
 * hiểu hơn về câu điều kiện và phép so sánh
 * 
 */

/**
 * hàm( funciton) trong js
 * 
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
 * 
 * 1. tham số
 *  định nghĩa: giá trị truyền vào khi gọi tới 1 function, tham số được sử dụng để làm một công việc gì đó trong function đó
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

/**
 * return là câu lệnh trả về dữ liệu, các câu lệnh phía sau sẽ không được thực hiện
 */

/**
 * một số điều cần biết về funciton
 * 
 * 1. khi function đặt trùng tên
 * 2. khai báo biến trong hàm
 * 3. định nghĩa hàm trong hàm
 */

/**
 * các loại function
 * 
 * 1. declaration function
 * // hosting: giúp declaration function có thể gọi trước khi được định nghĩa
 * 2. expresstion function
 * vd: var test= function(){}
 *     test(function() {})
 *     var test = {myFunction : function(){}}
 * không cần đặt tên cho function
 * 3. arrow function
 */

/**
 * chuỗi
 * 
 * 1. tạo chuỗi
 *  - các cách tạo chuỗi
 *  - nên dùng cách nào? lý do?
 *  - kiểm tra datatype
 * 2. một số case sử dụng backslash (\)
 * \' hoặc \" hoặc \\ in ra ký tự sau \
 * 3. xem độ dài chuỗi
 * console.log(biến.length)
 * 4. chú ý độ dài khi viết code
 * 1 dòng nên để 80 ký tự
 * 5. template string ES6
 * console.log(`toi la: ${biến1} ${biến2}`)
 */

/**
 * làm việc với chuỗi
 * 
 * 1. length: xem độ dài chuỗi
 * console.log(biến.length)
 * 2. find index: tìm kiếm 
 * console.log(biến.indexOf('ký tự muốn tìm kiếm', ví trí bắt đầu( mặc định là 0)))
 * console.log(biến.lastIndexOf('ký tự muốn tìm kiếm')) trả về vị trí cuối cùng của ký tự cần tìm trong chuỗi
 * console.log(biến.search('ký tự muốn tìm kiếm'))
 * nếu không tìm được ký tự cần tìm thì sẽ trả về -1
 * 3. cut string
 * console.log(biến.slice(vị trí đầu, vị trí cuối))
 * cắt ngược : số âm
 * 4. replace
 * thay thế ký tự đầu tiên trong chuỗi: console.log(biến.replace('ký tự muốn thay', 'ký tự thay'))
 * thay thế tất cả ký tự tìm được trong chuỗi: console.log(biến.replace(/ký tự muốn thay/g, 'ký tự thay'))
 * 5. convert to upper case
 * chuyển đổi tất cả chuỗi thành chữ hoa
 * console.log(biến.toUpperCase())
 * 6. convert to lower case
 * console.log(biến.toLowerCase())
 * chuyển đổi tất cả chuỗi thành chữ thường
 * 7. trim
 * loại bỏ ký tự khoảng trắng thừa ở hai đầu
 * console.log(biến.trim())
 * 8. split
 * cắt một chuỗi thành một array
 * vd: var biến = 'A, B, C'
 * console.log(biến.split('ký tự chung muốn cắt'))
 * 9. get a character by index
 * lấy được ký tự theo vị trí
 * console.log(biến.charAt(vị trí cần tìm))
 * console.log(biến[vị trí cần tìm])
 */

/**
 * kiểu số(number) trong javascript
 * 
 * 1. tạo giá trị number
 *  - các cách tạo
 * var biến= số;
 * var otherNumber = new Number(số);
 *  - dùng cách nào? tại sao?
 * không nên dùng cách 2 do từ khóa new khởi tạo 1 đối tượng, kiểu dữ liệu là object chứ không phải number
 *  - kiểm tra data type
 * typeof biến
 * đặc biệt khi kiểm tra NaN phải dùng code
 * console.log(isNaN(biến))
 * 2. làm việc với number
 *  - to string
 * chuyển kiểu number về string
 *  - to fixed
 * dùng để làm tròn số và chuyển biến về kiểu string
 * console.log(biến.toFixed(số rút gọn còn sau dấu ,))
 */

/**
 * mảng(array)
 * 1. tạo mảng
 *      cách tạo
 *      sử dụng cách nào? tại sao
 *      kiểm tra data type
 * 2. truy xuất mảng
 *      độ dài mảng
 *      lấy phần tử theo index
 * 
 */
