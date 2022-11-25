// Thực hành sử dụng phương thức reduce #1

/**
 * Tại SEA GAMES 31 vừa qua, đoàn thể thao Việt Nam đã đứng đầu bảng tổng sắp huy chương.
 * Hãy tạo hàm getTotalGold có 1 tham số là mảng.
 * Tính tổng số huy chương vàng mà đoàn thể thao Việt Nam đạt được trong kỳ SEA Game lần này.
 * 
 * Trong thực tế đoàn thể thao Việt Nam có được 205 huy chương vàng nhưng list ra thì dài quá nên mình chỉ list ra một vài cái tượng trưng thôi nhé.
 */


 var sports = [
    {
        name: 'Bơi lội',
        gold: 11
    },
    {
        name: 'Boxing',
        gold: 3
    },
    {
        name: 'Đạp xe',
        gold: 4
    },
    {
        name: 'Đấu kiếm',
        gold: 5
    },
]
var getTotalGold = (arr) => arr.reduce((a,b) => a + b.gold, 0)


// Expected results:
console.log(getTotalGold(sports)) // Output: 23