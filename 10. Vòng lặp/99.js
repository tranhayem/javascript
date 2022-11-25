// Bài tập sử dụng for... in

/**
 * Để vượt qua thử thách này, trước tiên,
 * hãy quan sát code cho trước và kết quả mong đợi (bên code editor).
 * 
 * 👉 Hãy hoàn thành hàm sao cho kết quả được như kết quả mong đợi.
 */

function run(object) {
    var result = []
    for (var key in object) {
        result.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
    }
    return result
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]