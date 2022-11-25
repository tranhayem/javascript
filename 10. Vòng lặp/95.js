// Tính tổng các phần tử là số của mảng

/**
 * Cho trước mảng numbers,
 * hãy viết hàm getTotal trả về tổng giá trị các phần tử của mảng.
 */

// cách 1:
function getTotal(arr) {
    var results= 0;
    for( var i=0; i< arr.length; i++) {
        results+= arr[i]
    }
    return results
}

// cách 2:
function getTotal(arr) {
    var results= 0;
    for(var value of arr){
        results+=value
    }
    return results
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17