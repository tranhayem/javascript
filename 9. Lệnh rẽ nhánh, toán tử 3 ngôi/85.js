// Thử thách khó, dùng If/else

/**
 * Để vượt qua thử thách này,
 * hãy hoàn thành hàm cho trước để đáp ứng các yêu cầu sau:
 * 
 * 1. Khi a chia hết cho 3 thì return về 1
 * 2. Khi a chia hết cho 5 thì return về 2
 * 3. Khi a chia hết cho 15 thì return về 3
 */

function run(a) {
    if (a % 15 === 0) {
        return 3;
    } else if (a % 5 === 0) {
        return 2;
    } else if (a % 3 === 0) {
        return 1;
    }
}

// Kỳ vọng
console.log(run(3)) // 1
console.log(run(5)) // 2
console.log(run(15)) // 3