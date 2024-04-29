require('dotenv').config();
const { NODE_MONGODB_URL } = process.env;
const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');

// public directory
app.use(express.static(__dirname + '/public'));

// ejs setting
app.set('view engine', 'ejs');

// 유저가 보낸 데이터를 보냈을 때 req.body로 편하게 쓸 수 있게 도와줌
app.use(express.json());
app.use(express.urlencoded({extended:true}));

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

// DB 조회 예제
app.get('/list', async (req, res) => {
  let response = await db.collection('post').find().toArray();
  res.render('list.ejs', {result: 'OK', value: response});
});
 
/**
 *  글 작성 기능
 *  1. 글 작성 페이지에서 쓴 글 서버로 전송
 *  2. 서버는 글을 검사
 *  3. 이상 없으면 DB에 저장
 */
app.get('/write', (req, res) => {
  res.render('write.ejs');
});

// form으로 전달 받은 데이터
app.post('/add', async(req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  try {

    if(title === '') {
      res.send("제목을 입력하세요");
    } else if (content === ''){
      res.send("내용을 입력하세요");
    } else {
      await db.collection('post').insertOne({title: title, content: content});
      res.redirect('/list');  
    } 
  } catch (e) {
    console.log("Error : ", e);
    res.send("Error : ", e);

  }

});

// URL parameter
app.get('/detail/:id', async(req, res) => {
  // url parameter 사용 법
  const id = req.params.id;
  
  try {
    let result = await db.collection('post').findOne({ _id: new ObjectId(id) });
    if(result !== null) res.render('detail.ejs', {result : 'OK', value: result});
    else res.send("URL 오류");

  } catch (e) {
    console.log("Error : ", e);
    res.status(404).send("URL 오류");
  }
  
});