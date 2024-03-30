// 간단한 변수 타입 지정 가능
let yourName: string = 'Sion-Noh';
// yourName = 12;
// Type 'number' is not assignable to type 'string'.ts(2322)
// type을 string으로 지정하였는데 12를 재할당하여 오류가 발생

// Array type
let nameList: string[] = ['Noh', 'Sion'];

// Object type
let nameObject: {name: string} = {
    name: 'Noh'
};

// Function type
function func(x: number): number {
    return x * 2;
}

// Union type: 다양한 타입이 들어올 수 있도록 타입 지정
let nameAge: string | number = 'Kim';

// type을 변수로 미리 지정하여 사용할 수 있다.
type myType = string | number;
let myName: myType = 123;

// Array에 사용할 수 있는 tuple type
type Members = [number, boolean];
let john: Members = [123, true];

// Object
type Member = {
    // string으로 된 모든 object 속성의 타입은 string
    [key: string]: string,
    name: string,
    // 모든 속성을 string으로 선언하여 number 타입 추가 시 오류 발생
    // age: number
}
let kim: Member = {name: "Kim", age: "19"};

// Class
class User {
    name: string;
    constructor(name: string){
        this.name = name;
    }
}