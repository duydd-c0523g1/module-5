// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function checkNumber(num) {
    return num > 0
}
console.log(arr.every(checkNumber));