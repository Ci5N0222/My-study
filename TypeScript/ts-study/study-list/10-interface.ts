// type, interface
// 차이점
// interface: 중복 선언이 가능
// tpye: 중복 선언 불가능

type Square1 = {
    color: string,
    width: number
}

let square: Square1 = {color : 'red', width: 100};


// extends
interface Student1 {
    name: string
}
// Student1을 extends 해서 Student1의 타입을 가져올 수 있다.
// extends로 중복된 타입은 에러를 발생시킨다.
interface Teacher extends Student1 {
    age: number
}
let student10 :Student1 = {name: 'kim'};
let teacher: Teacher = {name: 'kim', age: 20};

// 중복 선언을 할 경우 중복된 타입의 속성타입 사용
interface Student {
    name: string
}
interface Student {
    age: number
}
let student10_1: Student = {name: 'kim', age: 20}


// type 의 &기호 (intersection type)
type Animal10 = {
    name: string
}

// Cat의 타입과 Animal10의 타입이 같아야 한다.
// 중복 속성이 발생하면 오류가 발생하지 않음 (주의)
type Cat = {
    age: number
} & Animal10


// test 1. 오브젝트를 담고 있는 배열의 경우
interface Cart {
    product: string,
    price: number
}
let cart10: Cart[] = [{product: '', price: 1000}, {product: '', price: 100}];