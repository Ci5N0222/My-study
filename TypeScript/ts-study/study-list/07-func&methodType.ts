// type alias

// 함수 type 저장해서 쓰는법
type FuncType = (a: string) => number;
const func07_1: FuncType = function(a){
    return 10;
}

type Member1 = {
    name: string,
    age: number,
    plusOne: (x: number) => number,
    changName: () => void
}

// Object 내 함수 만들기
let members1: Member1 = {
    name: 'kim',
    age: 10,
    plusOne(a) {
        return a + 1;
    },
    changName: () => {
        console.log()
    }
}

type CutZero = (x:string) => string
const cutZero: CutZero = function(x){
    let str = x.replace(/^0+/, "");
    return str;
}

type RemoveDash = (x: string) => number
const removeDash: RemoveDash = function(x) {
    let num = x.replace(/-/g, "");
    return parseFloat(num);
}

type MakeFunc = (a: string, b: CutZero, c: RemoveDash) => number
const makeFunc:MakeFunc = function(a, cutZero, removeDash){
    let result = cutZero(a);
    let result2 = removeDash(result);
    return result2;
}