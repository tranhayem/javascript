// Thuật ngữ Built-in là gì?

/**
 * Giới thiệu một số hàm built-in
 * 
 * 1. alert- Hiển thị bảng thông báo nhỏ cho người dùng
 * 2. console- In ra những dòng thông báo bên tab Console
 *      console.log()- in ra Console các giá trị ở dạng string, number, object mà ta truyền vào
 *      console.info()-
 *      console.warn()- in ra cảnh báo
 *      console.error()- in ra lỗi
 *      console.assert()-
 *      console.clear()-
 *      console.dir()-
 *      console.group()-
 *      console.table()-
 *      console.time()-
 * 3. confirm- Hiển thị thông báo cho người dùng xác nhận
 * 4. prompt- Hiển thị thông báo cho người dùng nhập vào thông tin
 * 5. set timeout- Chạy 1 đoạn code sau 1 khoảng thời gian
 * 6. set interval- Chạy định kỳ 1 đoạn code sau 1 khoảng thời gian
 */

console.log('xin chào');

confirm('Xác nhận đủ tuổi')

prompt('Xác nhận đủ tuổi')

setTimeout(function() {
    alert('Thông báo')
}, 1000)

setInterval(function() {
    console.log(Math.random())
}, 1000)