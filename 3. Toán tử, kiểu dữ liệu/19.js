// Toán tử ++ và --

/**
 * Toán tử ++

 * Toán tử ++ giúp tăng giá trị của một biến mang giá trị số lên 1. Có 2 cách để sử dụng toán tử ++ là:
 * 1. Dùng làm hậu tố: variable++ (toán tử nằm sau biến)
 * 2. Dùng làm tiền tố: ++variable (toán tử nằm trước biến)
 */

/**
 * #1 Sử dụng ++ làm hậu tố

 * Ở đây, chúng ta sẽ xét ví dụ sử dụng toán tử ++ làm hậu tố trước (vì trong thực tế, chúng ta thường dùng kiểu hậu tố nhiều hơn):


var number = 1;

number++; // dùng làm hậu tố, ++ ở phía sau biến
console.log(number); // 2

number++;
console.log(number); // 3


 * Sau mỗi khi sử dụng toán tử ++, giá trị của biến number được tăng lên 1. Có vẻ khá dễ dàng để hiểu cách hoạt động của nó phải không?
 * Tuy nhiên, hãy xem xét thêm ví dụ sau:


var number = 1;

console.log(number++); // 1
console.log(number); // 2

console.log(number++); // 2
console.log(number); // 3


 * 👉 Toán tử ++ khi dùng là hậu tố sẽ tăng giá trị của biến lên 1 và trả về giá trị trước khi tăng.
 */

/**
 * #2 Sử dụng ++ làm tiền tố

 * Ở ví dụ này, chúng ta sử dụng ++ làm tiền tố. Tuy nhiên, kết quả trông sẽ không khác gì khi dùng ++ làm hậu tố:


var number = 1;

++number; // dùng làm tiền tố, ++ ở phía trước biến
console.log(number); // 2

++number;
console.log(number); // 3


 * Nhưng khi xem xét kỹ hơn, các bạn sẽ nhìn ra điểm khác:


var number = 1;

console.log(++number); // 2
console.log(number); // 2


 * 👉 Toán tử ++ khi dùng là tiền tố sẽ tăng giá trị của biến lên 1 và trả về giá trị sau khi tăng.
 */

/**
 * Toán tử - -

 * Cách hoạt động tương tự như toán tử ++, điểm khác biệt là thay vì cộng thêm 1, thì toán tử -- sẽ trừ đi 1.
 */

/**
 * Tổng kết

 * x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
 * ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
 * x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
 * --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảmm
 */