const numbers = [1, 2, 3];

// map()메소드는 모든 값을 새로운 배열로 반환
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);