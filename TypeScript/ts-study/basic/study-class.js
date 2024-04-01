// ES6 이전 오브젝트를 만드는 방법
function machine(q, w) {
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
new Champion('consume', 'snowball');