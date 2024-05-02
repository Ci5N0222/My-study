require('dotenv').config();
const { NODE_MONGODB_URL } = process.env;
const express = require('express');
const app = express();
const { MongoClient, ObjectId } = require('mongodb');
const methodOverride = require('method-override');

// Method-override
app.use(methodOverride('_method-override'));

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
    res.render('index.ejs');
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
    let response = await db.collection('post').findOne({ _id: new ObjectId(id) });
    if(response !== null) res.render('detail.ejs', {result : 'OK', value: response});
    else res.send("URL 오류");

  } catch (e) {
    console.log("Error : ", e);
    res.status(404).send("URL 오류");
  }
  
});

/**
 *  수정기능
 *  1. 수정버튼 누르면 수정 페이지로
 *  2. 수정페이지엔 기존 글이 채워져 있음
 *  3. 전송 누르면 입력한 내용으로 DB 글 수정
 */
app.get('/edit/:id', async(req, res) => {
  const id = req.params.id;

  try{
    let response = await db.collection('post').findOne({ _id: new ObjectId(id) });
    if(response !== null) res.render('edit.ejs', { result:"OK", value: response});
    else res.status(404).send("URL 오류");
  } catch (e) {
    console.log("Error : ", e);
    res.status(404).send("URL 오류");
  }
  
});

// 업데이트
app.post('/edit', async(req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const content = req.body.content;

  if(title === '') {
    res.send("제목을 입력하세요");
  } else if (content === ''){
    res.send("내용을 입력하세요");
  } else {
    try {
      // 하나의 document를 수정할 때 ( updateOne )
      await db.collection('post').updateOne({ _id : new ObjectId(id) }, {$set: { title, content }});
      // 여러개의 document를 수정하고 싶을 때 ( updateMany )
      await db.collection('post').updatemany({_id: 1}, {$inc: {like: 1}});
      res.redirect(`/detail/${id}`);
    } catch (e) {
      console.log("Error : ", e);
      res.send("수정 중 오류 발생");
    }
  }
});


/**
 *  삭제기능
 *  1. 글 삭제버튼 누르면 서버로 요청
 *  2. 서버는 확인 후 해당 글 DB에서 삭제
 */
app.delete('/delete', async(req, res) => {
  // query string 사용 법
  const qstr = req.query.id;
  await db.collection('post').deleteOne({_id : new ObjectId(qstr)});
  res.send("삭제완료");
});