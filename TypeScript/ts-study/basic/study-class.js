// ES6 이전 오브젝트를 만드는 방법
function machine(q, w) {
    // 오브젝트가 가질 속성들 작성
    this.q = q;
    this.w = w;
}
var nunu = new machine('consume', 'snowball');


// ES6 부터 사용 가능한 Class
class Champion {
    constructor(q, w){
        this.q = q;
        this.w = w;
    }
}
var nunu = new Champion('consume', 'snowball');


// prototype
machine.prototype.name = 'kim'
var nununu = new machine('consume', 'snowball');
nununu.name // kim

var array = [4, 2, 1];
var array = new Array(4, 2, 1);
