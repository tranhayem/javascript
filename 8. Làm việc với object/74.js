// Object là gì?

// Object trong javascript

var myInfo= {
    name: 'Dương', // có thể để là 'name': 'Dương', name là key, 'Dương' là value
    age: 20,
    phone: '0961305927',
    address: '175. Tây Sơn, Đống Đa, Hà Nội',
    // [ABC]: 'lotaynaongo@gmail.com' // thêm biến [ABC] thành key email bên dưới
    getName: function() {
        return this.name; // this ở đây được hiểu là object
    }
    // trong trường hợp này, function được gọi là phương thức
};

delete myInfo.age; // xóa thuộc tính

myInfo.email='lotaynaongo@gmail.com'; // thêm key email có value là lotaynaongo@gmail.com
/**
 * Quy tắc: object.key hoặc object['key']
 */
console.log(myInfo); // show object
console.log(myInfo.name); // show value từ key
console.log(myInfo.getName()) // show phương thức trong object
/**
 * Lưu ý:
 * var abc= 'name'
 * console.log(myInfo[abc]) tuyệt đối không truyền ['abc']
 */

/**
 * Thêm key từ ngoài:
 * var ABC = 'email'
 */
