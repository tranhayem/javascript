// Lệnh rẽ nhánh Switch

var date = 2;
switch (date) {
    case 2: // case sử dụng toán tử === để so sánh giá trị
        console.log('GoDz');
        break; // tính từ cây đúng, tất cả các giá trị sau đều được in ra, nên phải dùng break để đóng lại
    case 3:
        console.log('GoDz 2');
        break;
    case 4:
        console.log('GoDz 3');
        break;
    default:
        console.log('Không biết')
}