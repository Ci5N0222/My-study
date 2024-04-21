import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(["강남 우동 맛집", "용산 우동 맛집"]);

  return (
    <div className="App">

      <nav className='nav-bar'> 
        <h3>Blog!!</h3>
      </nav>

      {
        // 배열에 있는 아이템 개수 만큼 반복하는 함수를 사용하여 게시물 출력
        title.map(item => (
            <section className='contents'>
              <h4>{ item }</h4>
              <p>2월 17일</p>
            </section>
          ))
      }

      <section className='contents'>
        <h4>{ title[0] }</h4>
        <p>2월 17일</p>
      </section>

      <section className='contents'>
        <h4>{ title[1] }</h4>
        <p>2월 17일</p>
      </section>

    </div>
  );
}

export default App;
