require('dotenv').config();
const { NODE_MONGODB_URL } = process.env;
const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

app.use(express.static(__dirname + '/public'));

new MongoClient(NODE_MONGODB_URL).connect().then((client)=>{
  db = client.db('forum_node')
  app.listen(8080, () => {
    console.log("http://localhost:8080 에서 서버 실행중");
});
}).catch((err)=>{
  console.log(err)
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// DB 저장 예제
app.get('/news', (req, res) => {
  // /news로 접속하면 DB에 저장
  db.collection('post').insertOne({title: 'news'})
    // res.send('오늘 비옴');
});


