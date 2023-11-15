// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
let sum = (...numbers) => numbers.reduce((total, curr) => total + curr);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
