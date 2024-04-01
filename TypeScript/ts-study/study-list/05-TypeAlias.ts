// type alias 

// typy 변수만드는 법
type Animal = string | number | undefined;
let animal: Animal;


let student: {name: string, age: number} = {
    name: 'kim',
    age: 17
}

// type 을 저장해 놓고 사용
type StudentType = {name: string, age: number}
let student1: StudentType = {
    name: 'noh',
    age: 18
}
let student2: StudentType = {
    name : 'park',
    age : 18
}


// const 변수는 재할당을 막을 수 있지만 object 수정은 자유롭게 가능한 단점이 있다.
const myLocation = {
    location: 'seoul'
}
myLocation.location = 'busan'


type GirlFriend = {
    // readonly: 읽기 전용, 수정 시 오류발생
    readonly name: string,
    // ?: 선택사항 ( undefined|number )
    age?: number
}
const girlFriend: GirlFriend = {
    name: 'juhee'
}

// GirlFriend 타입에있는 readonly 속성으로 name 변경 시 오류
// girlFriend.name = 'minhee';
/* 타입스크립트 에러는 에디터, 터비널에서만 존재함 실제 변환된 js파일은 에러 없음 */

// type 변수 union type으로 합치기
type Name1 = string;
type Age1 = number;
type Person1 = Name1|Age1;

// 연산자로 object 타입 합치기
type PositionX = { x: number };
type PositionY = { y: number };
// &를 사용하여 타입 합치기, extend 하기
type NewType = PositionX & PositionY