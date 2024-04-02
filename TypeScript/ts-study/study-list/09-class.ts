class Person {
    // class 필드 값(constructor와 같은 역할을 함)
    name: string;
    constructor(a: string){
        // this.name을 사용하기 위해서는 필드값을 먼저 설정해야 한다.
        this.name = a;
    }

    personFunc(a: string){
        console.log(`hello ${a}`);
    }
}

Person.prototype.personFunc = function(a){};

let person1 = new Person('kim');
let person2 = new Person('noh');