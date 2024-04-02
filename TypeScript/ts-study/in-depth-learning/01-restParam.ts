// rest parameter
// 파라미터가 몇개 드러올지 모를 때, 무조건 들어올 파라미터 먼저 입력하고 마지막에 ...변수로 사용한다.
// rest parameter의 타입은 array로 지정한다.
function func11(num: number, ...a: number[]) {
    console.log(num, a);
}
func11(1, 2, 3, 4, 5, 6);

// spread operator
// 괄호를 제거하고 싶을 때 사용
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr1, ...arr2];

// destructuring
let arr4 = ['hi', 100];
let var1 = arr4[0];
let var2 = arr4[1];
// array 자료를 쉽게 변수로 사용할 수 있다.
let [var3, var4] = ['hi', 100];
// Object 자료를 변수로 사용
let { student11, age11 }: {student11: boolean, age11: number} = {student11: true, age11: 20};


// test 1. 숫자 여러개를 입력하면 최대값을 return 해주는 함수 만들기.
function maxNum(...a: number[]): number {
    let max = 0;
    a.forEach(item => {
        if(max < item) max = item;
    });
    return max;
}

// test 2. 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어 보기
objFunc( { user : 'kim', comment : [3,5,4], admin : false } );

type User11 = {
    user: string,
    comment: number[],
    admin: boolean
}
function objFunc({ user, comment, admin }: User11): void {
    console.log(user, comment, admin);
}