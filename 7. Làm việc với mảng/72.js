/**
 * Làm việc với mảng #3

Để vượt qua thử thách này,
hãy tạo hàm getFirstElement có 1 tham số
(F8 sẽ gọi hàm này và luôn truyền đối số là 1 array),
hàm này sẽ trả về phần tử đầu tiên trong mảng.
 */

// Viết hàm tại đây
function getFirstElement(array) {
    return array[0]
}



// Ví dụ sử dụng
var animals = ['Monkey', 'Tiger', 'Elephant'];
var result = getFirstElement(animals);

console.log(result); // Expected: "Monkey"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']