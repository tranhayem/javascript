
/**
 * Array methods:
 *      forEach() dùng để duyệt qua phần tử của mảng
 *      every() kiểu dữ liệu boolean, dùng để kiểm tra tất cả các phần tử thuộc mảng phải thỏa mãn điều kiện nào đó
 *      some() chỉ cần 1 thuộc tính thỏa mãn điều kiện => true
 *          every và some dùng để lặp, khi trả về jh 
 * 
 *      find()
 *      filter()
 *      map()
 *      reduce()
 */

var arrays= [
    {
        id: 1,
        name: 'GoDz',
        address: 'Úc',
        coin: 0
    },
    {
        id: 2,
        name: 'GoDz',
        address: 'Úc',
        coin: 0
    },
    {
        id: 3,
        name: 'GoDz',
        address: 'Úc',
        coin: 0
    },
    {
        id: 4,
        name: 'GoDz',
        address: 'Úc',
        coin: 0
    },
    {
        id: 5,
        name: 'GoDz',
        address: 'Úc',
        coin: 0
    },
    {
        id: 6,
        name: 'GoDz',
        address: 'Úc',
        coin: 0
    }
]

arrays.forEach(function(array, index) {
    console.log(index, array);
})

var free= arrays.every(function(array, index) {
    return array.coin=== 0
})

console.log(free)