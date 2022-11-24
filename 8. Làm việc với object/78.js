// Object prototype

/**
 * Object prototype - Basic
 * 
 * 1. Prototype là gì?
 * Prototype là một object
 * 2. Sử dụng khi nào?
 */

 function User(firstName, lastName, avatar) {
    this.firstName= firstName; // this ở đây dùng để mô tả những thuộc tính, phương thức sẽ có cho đối tượng khi khởi tạo object constructor
    this.lastName= lastName;
    this.avatar= avatar;

    // thêm phương thức
    this.getName= function() {
        return `${this.firstName} ${this.lastName}`; // từ khóa this ở đây khác với this ở trên, nó được gọi từ đối tượng ta gọi
    }
};

User.prototype.className= '61THNB';
User.prototype.getClassName= function() {
    return this.className;
};


var author= new User('Dương', 'Trần', 'avarer');
var user= new User('Hạ Yểm', 'Trần', 'avarer');

console.log(author);
console.log(user)