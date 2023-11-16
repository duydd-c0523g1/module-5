// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = arr.find((num) => num > 3)
if(result !== undefined) {
    console.log(result);
} else {
    console.log("Nope");
}