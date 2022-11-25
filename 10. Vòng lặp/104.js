// Vòng lặp lồng nhau (Nested loop)

myArray= [
    [1, 2],
    [3, 4],
    [5, 6],
];

for( var i= 0; i< myArray.length; i++) {
    // console.log(myArray[i]) // lấy ra các phần tử là mảng con của mảng
    for( var j= 0; j< myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}