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