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


