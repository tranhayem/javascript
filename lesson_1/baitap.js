// /** 1 */
// function tinhTong() {
//     var tong = 0
//     for (let i = 0; i < 5; i++) {
//         tong += i * 2
//     }
//     console.log(tong)
// }
// tinhTong()
// /** 2 */
// // function giaiPhuongTrinhBac1(a, b) {
// //     var x = 0;
// //     if (a === 0) {
// //         if (b === 0) {
// //             alert("phuong trinh vo so nghiem")
// //         } else {
// //             alert("phuong trinh vo nghiem")
// //         }
// //     } else {
// //         alert("phuong trinh co nghiem la " + -b/a)
// //     }
// // }
// // giaiPhuongTrinhBac1(2,-4)

// /**function giaiPhuongTrinhBac2(a, b, c) {
//     var x = 0;
//     if (a === 0) {
//         if (b === 0) {
//             if (c === 0) {
//                 alert("phuong trinh vo so nghiem")
//             } else {
//                 alert("phuong trinh vo nghiem")
//             }
//         } else {
//             alert("phuong trinh co nghiem la " + -c/b)
//         }
//     } else {
//         var d = b^2 - 4*a*c;
//         if (d<0) {
//             alert("phuong trinh vo nghiem")
//         } else if (d=0) {
//             alert("phuong trinh co nghiem kep x1= x2= " + -b/(2*a))
//         } else {
//             alert("phuong trinh co 2 nghiem phan biet")
//         }
//     }
// }
// giaiPhuongTrinhBac2(1,2,-4)

// /** 3 */
// function tinhTongGiaiThua(n) {
//             // s(1) = s(0) + 1!
//             // s(2) = s(1) + 2!
//             // s(3) = s(2) + 3!
//             // => s(n) = s(n-1) + (n-1)!
//             let tong = 0;
//             var P = 1;
//             for (let i = 1; i <= n; i++) {
//                 P *= i
//                 tong += P
//             }
//             console.log(tong)
//         }
// tinhTongGiaiThua(3)

// var i, n, a = 1,
//                 s = 0;

//             function tong(n) {
//                 for (i = 1; i <= n; i++) {
//                     a *= i;
//                     s += a;
//                 }
//                 console.log(s);
//             }
// tong(5);

// /** 7 */
// function kiemTra(n)
// {
//     // Biến cờ hiệu
//     var flag = true;

//     // Nếu n bé hơn 2 tức là không phải số nguyên tố
//     if (n < 2){
//         flag = false;
//     }
//     else{
//         // lặp từ 2 tới n-1
//         for (var i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }

//     // Kiểm tra biến flag
//     if (flag == true){
//         document.write(n + " là số nguyên tố <br/>");
//     }
//     else{
//         document.write(n + " không phải là số nguyên tố <br/>");
//     }
// }
// kiemTra()

// function kiemTraSoNguyenTo(n) {

//     //  n = 1,2 không phải là số nguyên tố
//     var flag = true;
//     if (n === 0 && n === 1) {
//       console.log(n + ' không phải số nguyên tố');
//     } else {
//       // lặp từ 2 đến căn bậc 2 của n
//       for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//           flag = false;
//           break;
//         }
//       }
//       console.log(flag ? n + ' là số nguyên tố' : n + ' không phải số nguyên tố')
//     }
//   }
// kiemTraSoNguyenTo(11)

// /** 6 */
// function kiemTranam(x){

// }
// var x = 1960;
// var can, chi = "";
// switch (x % 10) {
//     case 0:
//         can = "Canh";
//         break;
//     case 1:
//         can = "Tân";
//         break;
//     case 2:
//         can = "Nhâm";
//         break;
//     case 3:
//         can = "Quý";
//         break;
//     case 4:
//         can = "Giáp";
//         break;
//     case 5:
//         can = "Ất";
//         break;
//     case 6:
//         can = "Bính";
//         break;
//     case 7:
//         can = "Đinh";
//         break;
//     case 8:
//         can = "Mậu";
//         break;
//     case 9:
//         can = "Kỷ";
//         break;
// }
// switch (x % 12) {
//     case 0:
//         chi = "Thân";
//         break;
//         case 1:
//         chi = "Dậu";
//         break;
//         case 2:
//         chi = "Tuất";
//         break;
//         case 3:
//         chi = "Hợi";
//         break;
//         case 4:
//         chi = "Tý";
//         break;
//         case 5:
//         chi = "Sửu";
//         break;
//         case 6:
//         chi = "Dần";
//         break;
//         case 7:
//         chi = "Mão";
//         break;
//         case 8:
//         chi = "Thìn";
//         break;
//         case 9:
//         chi = "Tỵ";
//         break;
//         case 10:
//         chi = "Ngọ";
//         break;
//         case 11:
//         chi = "Mùi";
//         break;
// }
// var colors= ["blue","red"]
// var colors1= ["green","yellow"]
// //colors=colors.concat(colors1);
// colors=[...colors,...colors1];
// var index= colors.indexOf("red");
// colors.splice(index,1)
// console.log(colors.join());

//object
// var nguyenThiB = {
//     name : "Nguyen Thi B",
//     age : 26,
//     address : "Ninh Binh",
// }
var tranNgocD = {
    name: "Tran Ngoc D",
    age: 21,
    address: "Thai Binh",
    wife: {
        name: "Nguyen Thi B",
        age: 26,
        address: "Ninh Binh",
    },
    running: function (namHientai) {
        var namSinh = namHientai- this.age;
        console.log(this.name + " sinh nam " + namSinh);
    }
}
console.log(tranNgocD.wife)
tranNgocD.running(2022)