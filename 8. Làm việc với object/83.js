// Lấy ngẫu nhiên phần tử của mảng

/**
 * Hãy tạo hàm getRandomItem,
 * hàm này nhận 1 tham số là mảng và sẽ trả về ngẫu nhiên 1 phần tử của mảng.
 */

function getRandomItem(array) {
    var random = Math.floor(Math.random() * length);
    return array[random]
}