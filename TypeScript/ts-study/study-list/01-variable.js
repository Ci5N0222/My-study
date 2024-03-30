// 간단한 변수 타입 지정 가능
let yourName = 'Sion-Noh';
// yourName = 12;
// Type 'number' is not assignable to type 'string'.ts(2322)
// type을 string으로 지정하였는데 12를 재할당하여 오류가 발생
// Array type
let nameList = ['Noh', 'Sion'];
// Object type
let nameObject = {
    name: 'Noh'
};
// Function type
function func(x) {
    return x * 2;
}
// Union type: 다양한 타입이 들어올 수 있도록 타입 지정
let nameAge = 'Kim';
let myName = 123;
let john = [123, true];
let kim = { name: "Kim", age: "19" };
// Class
class User {
    constructor(name) {
        this.name = name;
    }
}
/**
 *  타입스크립트 기본 타입 정리 (primitive types)
 *  변수에 타입 지정 가능
 *  장점: 타입이 실수로 변경될 때 에러를 보여준다.
 *  선언 및 할당: let 변수명: 타입명 = '값';
 */
let varName = 'Sion-Noh';
let varAge = 19;
let varMarry = undefined; // 변수가 정의되지 않음
// Array 자료형 타입 지정
// :string[] --> string 타입의 데이터만 가능
let members = ['kim', 'park'];
// object 자료형 타입 지정
let member = {
    name: 'kim',
    age: 20
};
// 값이 할당되면 자동으로 타입이 지정되기 떄문에 타입지정 문법 생략 가능
let varMembers = [1, 2, 3];
// Test 1. 이름, 나이, 지역를 변수로 각각 저장
let my_name = 'Sion-Noh';
let my_age = 33;
let my_location = 'Bucheon';
// Test2. 가장 좋아하는 곡과 가수 이름을 Object 자료형으로 선언
let my_favorite = {
    singer: "RunDMC",
    song: "MaryMary"
};
// Test3. 이 오브젝트의 타입을 정의
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
