// Union type, Any, Unknown
// 문자 or 숫자가 들어올 수 있는 변수 (Union Type: 타입이 2개 이상의 새로운 타입)
let member1 = 'kim';
member1 = 19;
// 숫자 or 문자가 가능한 array 타입 지정 시 소괄호() 사용
let memberList = [1, 2, '3'];
// 숫자 or 문자가 가능한 object 타입 지정
let memberObj = { name: 123 };
// Any: TypeScript를 사용하지 않고 일반 자바스크립트 변수 처럼 사용하는 것과 같다.
// 타입 관련 버그가 발생해도 잡아주지 않는다.
let anyName;
anyName = 123;
anyName = true;
anyName = [];
// Unknown: 타입 관련 버그가 발생할 경우 Any 타입보다 error를 잘 캐치한다.
let unknownName;
unknownName = 123;
unknownName = {};
let objectVar;
objectVar = anyName; // any: error 미발생
// objectVar = unknownName;     // unknown: error 캐치
// 간단한 수학연산의 경우
// string type + 1 (OK)
// number type + 1 (OK)
// string|number type + 1 (ERROR!!!)
let number1;
// number1 + 1;         // error!
// Test 1. 다음 변수 4개에 타입 지정
let user = 'kim';
let age = undefined;
let married = false;
let cheolsoo = [user, age, married];
// Test 2. 학교라는 변수에 타입 지정
let school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
school.score[4] = false;
school.friend = ['Lee', school.teacher];
