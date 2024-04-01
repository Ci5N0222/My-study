/**
 *  Literal types
 *
 *  Literal type은 const 변수와 유사하지만 const는 자료를 하나만 저장할 수 있지만,
 *  Literal type은 여러가지를 저장할 수 있다.
*/
// 해당 변수는 지정된 "가위", "바위", "보" 이외에는 재할당을 할 수 없다.
let str;
let strList;
var data1 = {
    name: 'kim'
};
function myFunc(a) {
}
// myFunc(data1.name);   // 오류 발생: data.name의 값은 'kim' 이지만 자료형은 string 이기 때문
var data2 = {
    name: 'kim'
}; // object.value 값을 타입으로 지정, object 속성들에 모두 readonly 속성 부여
myFunc(data2.name);
