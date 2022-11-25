// Đệ quy là gì? Học về đệ quy!

var array= [
    'a',
    'b',
    'c',
    'd',
    'a',
    'b',
    'c',
    'd',
    'c',
    'd',
    'a',
    'b',
]

console.log(new Set(array)) // xóa các phần tử trùng lặp, trả về kiểu object
console.log([...(new Set(array))])


// Đệ quy

function deQuy() {
    deQuy();
}
deQuy();

// bài toán A----vòng lặp---->căng nhất----> ngốn CPU
// bài toán A----đệ quy---->căng nhất----> ngốn ram


// 1. Xác định điểm dừng
// 2. logic handle => tạo ra điểm dừng

function deQuy(num) {
    if (num< 0) {
        // dừng
        // ...
        return
    }
    deQuy();
}
deQuy(10);


function countDown(num) {
    if (num > 0) {
        console.log(num)
        return countDown(num - 1)
    }
    return num
}
countDown(10);


function loop(start, end, cb) {
    if(start < end) {
        cb(start);
        return loop(start+ 1, end, cb);
    }
}

var array = ['java', 'php', 'ruby'];
loop(0, array.length, function(index) {
    console.log(array[index])
} // đoạn này chưa học xong