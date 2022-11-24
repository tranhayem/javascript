// Hàm kiểm tra đủ tuổi bỏ phiếu

/**
 * Để vượt qua thử thách này bạn cần tạo hàm getCanVoteMessage,
 * hàm này có 1 tham số là age.
 * Trong trường hợp từ 18 tuổi trở lên hàm sẽ trả về Bạn có thể bỏ phiếu,
 * ngược lại hàm trả về Bạn chưa được bỏ phiếu.
 * 
 * Sử dụng toán tử 3 ngôi trong bài này,
 * không sử dụng if/else bạn nhé.
 * 
 * Nội dung messages
Copy nội dung mesages ở đây, tránh tự gõ, dễ sai chính tả bạn nhé.

"Bạn có thể bỏ phiếu"
"Bạn chưa được bỏ phiếu"
 */

// Làm bài
function getCanVoteMessage(age) {
    var result= age >= 18 ? 'Bạn có thể bỏ phiếu' : 'Bạn chưa được bỏ phiếu';
    return result
}

// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'