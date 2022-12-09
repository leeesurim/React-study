// 원시 타입(Privitive Type) - 정수, 실수, 문자, 논리 리터럴 등의 실제 데이터 값을 저장하는 타입
// 복사할 때 갑 자체를 복사
const number = 1;
const num2 = number;

console.log(num2); // 1

// 참조 타입(Reference Type) - 객체, 배열 
const person = {
    name: "Toby"
};

/*
    객체 person은 메모리에 저장되어 있고, 상수 person에는 메모리에 있는 주소를 가리키는 포인터를 저장합니다.
    person을 secondPerson에 할당하면 포인터가 복사될 것입니다.
 */
// const secondPerson = person;


/*
    변경할 수 없는 방법으로 복사하는 법 => 스프레드 연산자를 사용하여 객체를 복사
    객체로부터 프로퍼티와 프로퍼티의 값을 가져와서 새로 생성한 객체에 추가하는데, 중괄호를 써서 생성할 수 있습니다.
 */
const secondPerson = {
    ...person
}

/*
    단지 포인터를 복사했고, person이 가리키는 메모리에 있는 동일한 객체를 가리키기 때문에 
    person의 name을 변경하면 자동적으로 secondPerson의 이름도 바뀝니다.
 */
// 스프레드 연산자를 사용하여 복사할 경우 포인터가 아닌 진짜 복사본을 생성했기 때문에 변경되지 않음 
person.name = "TobyCUTE";

console.log(secondPerson);

/*
    만약 재할당을 한다면, 값이 아닌 포인터를 복사하는 것이고, 
    진짜로 복사하고 싶다면, 새로운 객체를 색성해서 전체 객체를 복사하는 것이 아니라 프로퍼티를 복사해야 합니다.
*/