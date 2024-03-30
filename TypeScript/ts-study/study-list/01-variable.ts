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

/**
 *  타입스크립트 기본 타입 정리 (primitive types)
 *  변수에 타입 지정 가능
 *  장점: 타입이 실수로 변경될 때 에러를 보여준다.
 *  선언 및 할당: let 변수명: 타입명 = '값';
 */

let varName: string = 'Sion-Noh';
let varAge: number = 19;
let varMarry: undefined = undefined; // 변수가 정의되지 않음

// Array 자료형 타입 지정
// :string[] --> string 타입의 데이터만 가능
let members: string[] = ['kim', 'park'];

// object 자료형 타입 지정
let member: {name:string, age:number} = {
    name: 'kim', 
    age: 20
};

// 값이 할당되면 자동으로 타입이 지정되기 떄문에 타입지정 문법 생략 가능
let varMembers = [1, 2, 3];

// Test 1. 이름, 나이, 지역를 변수로 각각 저장
let my_name: string = 'Sion-Noh';
let my_age: number = 33;
let my_location: string = 'Bucheon';

// Test2. 가장 좋아하는 곡과 가수 이름을 Object 자료형으로 선언
let my_favorite: {singer: string, song: string} = {
    singer: "RunDMC",
    song: "MaryMary"
}

// Test3. 이 오브젝트의 타입을 정의
let project: {member: string[], days: number, started: boolean} = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
  }