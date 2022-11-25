// Tính tổng giá trị đơn hàng

/**
 * Ở bài này, chúng ta sẽ viết chương trình để tính tổng giá trị của 1 đơn hàng.
 * 
 * Cho trước mảng orders là danh sách chứa các khóa học,
 * các mặt hàng này được thể hiện dưới dạng object
 * và đều có 1 key là price để thể hiện giá trị của mặt hàng đó.
 * 
 * Bạn hãy hoàn thành hàm getTotal để tính được tổng giá trị của đơn hàng.
 */

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

// reduce
const getTotal = (orders) => orders.reduce((total, item) => total + item.price, 0)

// for
function getTotal(orders) {
    var sum = 0
    var arrayLength = orders.length
    for(var i = 0; i < arrayLength; i++) {
        sum += orders[i].price
    }
    return sum
}

// for... in
function getTotal(orders) {
    var sum = 0
    for(var index in orders) {
        sum += orders[index].price
    }
    return sum
}

// for... of
function getTotal(orders) {
    var sum = 0
    for(var index of orders) {
        sum += index.price
    }
    return sum
}

// Expected results:
getTotal(orders) // Output: 8700000
