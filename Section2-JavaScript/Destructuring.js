// 구조분해할당 - 원소나 프로퍼티를 하나만 가져와서 변수에 저장
const numbers = [1, 2, 3];
[num1, , num2] = numbers;
console.log(num1, num2);

[a, b] = ["Hello", "Toby"];
console.log(a, b);

const {name} = {name: "Toby", age: 15};
console.log(name);
