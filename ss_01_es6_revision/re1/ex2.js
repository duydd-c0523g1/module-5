// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr.reduce((total, curr) => total + curr, 0);
console.log(sum);