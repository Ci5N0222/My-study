## Why TypeScript?
- JavaScript는 Dynamic Typing이 가능하기 때문
    - 편리한 기능이지만 크기가 크면 커질수록 자유도와 유연성이 높은 것은 독이 될 수 있다.
    - 타입 관련 버그를 미연에 방지할 수 있다.
- 타입을 엄격하게 잡아주기 때문에 에러메시지의 퀄리티가 좋아진다.
    - 간단한 수학 연산도 타입이 맞아야 한다.
    - 타입의 에러를 정확하게 짚어준다.
- 코드 에이터 같은 기능을 제공한다.

## TypeScript install
```bash
$ npm install -g typescript
$ yarn global add typescript
```

## Start TypeScript
### 1. create *.ts file
### 2. Setting TypeScript config
```bash
1. create tsconfig.json
2. config Setting
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs"
    }
}
```
### 3. .ts --> .js change
.ts --> .js 로 변환해야 사용 가능하다.
```bash
$ tsc index.ts
$ tsc -w
```