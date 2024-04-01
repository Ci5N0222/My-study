// type alias

// 함수 type 저장해서 쓰는법
type FuncType = (a: string) => number;
const func07_1: FuncType = function(a){
    return 10;
}

// Object 내 함수 만들기
let members1 = {
    name: 'kim',
    plusOne(a: number): number{
        return a + 1;
    },
    changName: () => {}
}
// 함수 사용
members1.plusOne(1)