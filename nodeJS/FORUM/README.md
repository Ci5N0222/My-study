## Node.JS Study

### Start
```bash
$ npm init -y
```

Express install
```bash
$ npm install express
```

Start
- create server.js
```bash
const express = require('express')
const app = express()

app.listen(8080, () => {
    console.log("서버 실행중");
});

app.get('/', (req, res) => {
    res.send('hi');
});
```

## lib
### Nodemon
- 소스코드가 수정될 떄 마다 node server.js를 재실행 해주는 라이브러리
```bash
// install
$ npm install -g nodemon

// start
$ nodemon server.js
```

### dotenv
- .env 파일을 사용하여 ID, PW, URL 등 코드상으로 공유하지 않을 민감한 정보를 감추기 위해 사용
```bash
// install
$ npm install dotenv
```

### MongoDB
```bash
// MongoDB 5버전 install
$ npm install mongodb@5
```

### ejs
- JavaScript 문법 그대로 html을 사용할 수 있음
```bash
// ejs install
$ npm install ejs
```