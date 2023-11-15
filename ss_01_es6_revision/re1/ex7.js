// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
const people = [
    {pName: 'Duy', age: 20},
    {pName: 'Hoang', age: 30},
    {pName: 'Hiep', age: 40}
];

let [{pName, age}, ...rest] = people
console.log(rest);
console.log({pName, age});