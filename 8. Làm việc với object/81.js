// Hoàn thiện hàm getNextYear

/**
 * Để vượt qua thử thách này,
 * bạn hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp.
 * Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.
 */

var date = new Date();
function getNextYear() {
    return date.getFullYear() + 1
}