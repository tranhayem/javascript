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
//     // Bi???n c??? hi???u
//     var flag = true;

//     // N???u n b?? h??n 2 t???c l?? kh??ng ph???i s??? nguy??n t???
//     if (n < 2){
//         flag = false;
//     }
//     else{
//         // l???p t??? 2 t???i n-1
//         for (var i = 2; i < n-1; i++)
//         {
//             if (n % i == 0){
//                 flag = false;
//                 break;
//             }
//         }
//     }

//     // Ki???m tra bi???n flag
//     if (flag == true){
//         document.write(n + " l?? s??? nguy??n t??? <br/>");
//     }
//     else{
//         document.write(n + " kh??ng ph???i l?? s??? nguy??n t??? <br/>");
//     }
// }
// kiemTra()

// function kiemTraSoNguyenTo(n) {

//     //  n = 1,2 kh??ng ph???i l?? s??? nguy??n t???
//     var flag = true;
//     if (n === 0 && n === 1) {
//       console.log(n + ' kh??ng ph???i s??? nguy??n t???');
//     } else {
//       // l???p t??? 2 ?????n c??n b???c 2 c???a n
//       for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i === 0) {
//           flag = false;
//           break;
//         }
//       }
//       console.log(flag ? n + ' l?? s??? nguy??n t???' : n + ' kh??ng ph???i s??? nguy??n t???')
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
//         can = "T??n";
//         break;
//     case 2:
//         can = "Nh??m";
//         break;
//     case 3:
//         can = "Qu??";
//         break;
//     case 4:
//         can = "Gi??p";
//         break;
//     case 5:
//         can = "???t";
//         break;
//     case 6:
//         can = "B??nh";
//         break;
//     case 7:
//         can = "??inh";
//         break;
//     case 8:
//         can = "M???u";
//         break;
//     case 9:
//         can = "K???";
//         break;
// }
// switch (x % 12) {
//     case 0:
//         chi = "Th??n";
//         break;
//         case 1:
//         chi = "D???u";
//         break;
//         case 2:
//         chi = "Tu???t";
//         break;
//         case 3:
//         chi = "H???i";
//         break;
//         case 4:
//         chi = "T??";
//         break;
//         case 5:
//         chi = "S???u";
//         break;
//         case 6:
//         chi = "D???n";
//         break;
//         case 7:
//         chi = "M??o";
//         break;
//         case 8:
//         chi = "Th??n";
//         break;
//         case 9:
//         chi = "T???";
//         break;
//         case 10:
//         chi = "Ng???";
//         break;
//         case 11:
//         chi = "M??i";
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