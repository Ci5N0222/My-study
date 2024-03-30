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

// 결론 : this는 나를 담고 있는 오브젝트를 뜻한다.


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

