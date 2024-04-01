/**
 *  함수(function)
 *  1. 길고 복잡한 코드를 한 단어로 축약할 수 있다.
 *  2. 숫자를 넣으면 다른 숫자가 나오는 블랙 박스 역할.
 *  3. 파라미터 function(x) <-- x: 파라미터
 */
let anyX; // 타입을 지정하지 않으면 any 타입이 할당 됨
// 함수의 파라미터, 리턴 값 타입 지정하기
function func05_1(x) {
    return x * 2; // 파라미터 x에 2를 곱하여 return
}
func05_1(6);
// func05_1('x');     // 함수의 파라미터를 number로 지정하여 오류 발생
// return을 사용하지 않는 함수의 경우 void 타입을 지정
function func05_2(x) {
    1 + 1;
}
// 자바스크립트와 타입스크립트의 차이점
// 일반 자바스크립트의 경우 파라미터를 입력하지 않아도 오류가 발생하지 않지만
// 타입스크립트의 경우 함수에 파라미터가 지정되어 있는데 파라미터를 입력하지 않으면 오류가 발생한다.
// func05_2()  <-- 오류 발생
// x의 값이 들어올 수도 있고 안들어 올 수도 있을 경우
// 파라미터변수?: 타입
// 변수: number|undefined와 같음
function func05_3(x) {
}
// Test 1.
const func05_4 = (x) => {
    if (x)
        console.log(`안녕하세요 ${x}`);
    else
        console.log("이름이 없습니다");
};
// Test 2.
function func05_5(x) {
    return x.toString().length;
}
