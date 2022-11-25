// Thực hành làm việc với mảng

/**
 * Để vượt qua thử thách này,
 * hãy tạo hàm getMostFavoriteSport có 1 tham số (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array).
 * Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.
 * 
 * Gợi ý: Sử dụng phương thức filter.
 */

const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
function getMostFavoriteSport(arr) {
    return arr.filter(function (sport) {
        return sport.like > 5;
    })
}


// Kỳ vọng
console.log(getMostFavoriteSport(sports))
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]
