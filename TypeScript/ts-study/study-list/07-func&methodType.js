// type alias
const func07_1 = function (a) {
    return 10;
};
// Object 내 함수 만들기
let members1 = {
    name: 'kim',
    age: 10,
    plusOne(a) {
        return a + 1;
    },
    changName: () => {
        console.log();
    }
};
const cutZero = function (x) {
    let str = x.replace(/^0+/, "");
    return str;
};
const removeDash = function (x) {
    let num = x.replace(/-/g, "");
    return parseFloat(num);
};
const makeFunc = function (a, cutZero, removeDash) {
    let result = cutZero(a);
    let result2 = removeDash(result);
    return result2;
};
