// this

// 1. 그냥 사용하거나 일반 함수안에서 사용할 경우 --> window --> 전역 오브젝트, 기본 함수들을 수납
console.log(this);  //  window

function func() {
    console.log(this)
}
func();  // window

// 2. 오브젝트 내 함수안에서 this를 사용하면 그 함수를 가지고 있는 오브젝트를 뜻한다.
var obj = {
    data: 'Noh',
    func: function(){
        console.log(this);
    }
}
obj.func();  // obj

// 3. 오브젝트를 생성하는 기계를 만든다 --> 기계 안에서 사용하면 새로 생성되는 오브젝트를 뜻함
function machine() {
    // instance 생성 : 새로 생성되는 오브젝트
    this.name = 'Noh'
}
var object = new machine();

// 4. EventListener
document.querySelector('#btn').addEventListener('click', function(e){
    console.log(this);
    console.log(e.currentTarget);
    var array = [1, 2, 3];
    array.forEach(function(item){
        console.log(itme);
        console.log(this);  // 1번에 해당 : window 출력
    })
});

// 5. 신문법 arrow function [ () => {} ]은 this를 생성하지 않고 상위 this를 물려 받아서 사용한다.
var obj = {
    name: ['Kim', 'Noh', 'Park'],
    func: function(){
        console.log(this);  // obj
        obj.name.forEach(function(){
            console.log(this);  // window
        })
        obj.name.forEach(()=>{
            console.log(this);  // obj: this를 재설정하지 않기 때문에 상위 this를 사용
        })
    }
}

// this는 나를 담고 있는 오브젝트를 뜻한다.
// window는 자바스크립트 기본 함수를 담은 {오브젝트} 이다


// ===================================================================================================

// Arrow function
/**
 *  1. 입출력 기계 만들 때 보기가 쉽다.
 *  2. 소괄호, 중괄호 생략 가능
 *      - 파라미터 1개면 소괄호 생략 가능
 *      - 코드가 한줄일 경우 중괄호 생략 가능
 *  3. 함수를 목적에 맞게 사용해야 한다.
 *      - 코드들을 기능으로 묶고 싶을 때 사용
 *      - 입출력 기계를 만들고 싶을 때 사용
 */
 
// ES6 Arrow function
const age = (a) => {
    console.log(a);
}
// const age = a => console(a); 이런식으로 소괄호, 중괄호 생략 가능
[1, 2, 3, 4].forEach(item => console.log(item));

// Arrow function this?
var obj = {
    funct: function(){
        this;   // obj
    },
    func: () => {
        this;   // window
    }
}

document.querySelector('#btn').addEventListener('click', (e) => {
    this;           // window
    e.currentTarget // this 대신 사용
});


// ===================================================================================================


/**
 *  변수
 *  var: 재선언 O, 재할당 O, 범위: function
 *  let: 재선언 X, 재할당 O, 범위: {}
 *  const(constant: 상수): 재선언 X, 재할당 X, 범위: {}
 */

var name = 'Kim';
var name = 'Noh';

let number = 30;
number = 40;

const str = '재선언 X, 재할당 X';

// 오브젝트 수정 불가로 만들기
const people = {name: 'Kim'};
Object.freeze(people);


/**
 *  Hoisting 현상
 *   - 함수나 변수의 선언을 범위 맨위로 끌고오는 현상 (자바스크립트 언어의 특징)
 *   - let, const는 Hoisting시 undefined가 자동으로 할당되지 않는다 (var는 undefined로 할당됨)
 *   - 함수 표현식 (function(){}) : 전부 Hoisting 됨
 *   - 변수 형식의 함수 (var func = function(){}) : 선언 부분만 Hoisting 
 */


// 전역변수: 모든 곳에서 사용 가능한 변수
// 지역변수: 지정된 범위 내에서만 사용 가능한 변수

var name = 'Kim';       // 전역변수
window.name = 'Kim'     // window로 만든 전역변수
function names(){
    var name = 'Kim';   // names() 함수 내에서만 사용되는 지역변수
}

if(true){
    let a = 1;
    var b = 2;
    if(true){
        let b=3;
    }
    console.log(b);  // 2 출력
}


// ===================================================================================================

// template literals
 
/**
 *  backquote 문자열의 장점
 *  1. 엔터키 가능
 *  2. 중간중간 변수 넣기 쉬움
 *  3. HTML 작성시 유용하다.
 */

// 1. 엔터 키 사용
var name = '손흥민';
var name = `손흥
민`;

// 2. 변수 사용
var name1 = '손흥민';
var content1 = '안녕하세요 저는 ' + name1 +'입니다';
var content2 = `안녕하세요 저는 ${name1}입니다.`

// 3. HTML 작성
var template = `<div>${name1}</div>`

// tagged literal
function func(a) {
    return a;
}
func`안녕하세요 ${name1}입니다.`