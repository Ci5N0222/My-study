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

Nodemon
- 소스코드가 수정될 떄 마다 node server.js를 재실행 해주는 라이브러리
install
```bash
$ npm install -g nodemon
```
start
```bash
$ nodemon server.js
```

MongoDB
install
```bash
// MongoDB 5버전 설치
$ npm install mongodb@5
```