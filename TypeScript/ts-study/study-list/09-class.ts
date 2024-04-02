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


class Car {
    model: string;
    price: number;
    constructor(a: string, b: number){
        this.model = a;
        this.price = b;
    }

    tax(): number{
        return this.price * 0.1;
    }
}

class Word {
    num: number[];
    str: string[];

    constructor(...param: (number|string)[]){
        let numberList: number[] = [];
        let strList: string[] = [];

        param.forEach(item => {
            if(typeof item === 'string') strList.push(item);
            else numberList.push(item);
        });

        this.num = numberList;
        this.str = strList;
    }
}