require('dotenv').config();
const { NODE_MONGODB_URL } = process.env;
const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

app.use(express.static(__dirname + '/public'));

new MongoClient(NODE_MONGODB_URL).connect().then((client)=>{
  console.log('DB연결성공')
  db = client.db('forum_node')
}).catch((err)=>{
  console.log(err)
})



app.listen(8080, () => {
    console.log("http://localhost:8080 에서 서버 실행중");
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/news', (req, res) => {
    res.send('오늘 비옴');
});


