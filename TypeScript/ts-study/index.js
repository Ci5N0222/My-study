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
