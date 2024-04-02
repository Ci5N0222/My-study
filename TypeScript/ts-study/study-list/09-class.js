class Person {
    constructor(a) {
        // this.name을 사용하기 위해서는 필드값을 먼저 설정해야 한다.
        this.name = a;
    }
    personFunc(a) {
        console.log(`hello ${a}`);
    }
}
Person.prototype.personFunc = function (a) { };
let person1 = new Person('kim');
let person2 = new Person('noh');
