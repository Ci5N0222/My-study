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
class Car {
    constructor(a, b) {
        this.model = a;
        this.price = b;
    }
    tax() {
        return this.price * 0.1;
    }
}
class Word {
    constructor(...param) {
        let numberList = [];
        let strList = [];
        param.forEach(item => {
            if (typeof item === 'string')
                strList.push(item);
            else
                numberList.push(item);
        });
        this.num = numberList;
        this.str = strList;
    }
}
