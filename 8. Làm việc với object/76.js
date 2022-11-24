// Object constructor


// Mô tả bản thiết kế đối tượng
function User(firstName, lastName, avatar) {
    this.firstName= firstName; // this ở đây dùng để mô tả những thuộc tính, phương thức sẽ có cho đối tượng khi khởi tạo object constructor
    this.lastName= lastName;
    this.avatar= avatar;

    // thêm phương thức
    this.getName= function() {
        return `${this.firstName} ${this.lastName}`; // từ khóa this ở đây khác với this ở trên, nó được gọi từ đối tượng ta gọi
    }
};

// tạo đối tượng từ object constructor
var author= new User('Dương', 'Trần', 'avarer');
var user= new User('Hạ Yểm', 'Trần', 'avarer');

// thêm các thuộc tính cho đối tượng
author.title= 'Admin';
user.comment= 'Na đáng yêu nhất thế giới';

console.log(author);
console.log(user);

console.log(author.constructor) // trả ra mô tả bản thiết kế
console.log(author.constructor === User) // kiểm tra đối tượng có thuộc bản thiết kế không, kiểu dữ liệu trả về là boolean
