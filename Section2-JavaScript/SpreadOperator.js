// 모든 원소나 프로퍼티를 가져와서 새 배열이나 객체에 전달
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

const person = {
    name: 'toby'
};

const newPerson = {
    ...person,
    age: 15
}

console.log(newPerson);