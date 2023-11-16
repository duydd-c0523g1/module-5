// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = (array, num) => array.includes(num)? num : "nope"
console.log(result(arr, 5));