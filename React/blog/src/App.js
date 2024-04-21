import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(["강남 맛집", "용산 맛집", "홍대 맛집"]);
  const [like, setLike] = useState(0);

  return (
    <div className="App">

      <nav className='nav-bar'> 
        <h3>Blog!!</h3>
      </nav>

      {
        // 배열에 있는 아이템 개수 만큼 반복하는 함수를 사용하여 게시물 출력
        title.map((item, i) => (
            <section className='contents' key={ i }>
              <h4>{ item } </h4>
              <span onClick={() => setLike(like+1) }>❤</span> { like }
              <p>2월 17일</p>
            </section>
          ))
      }

    </div>
  );
}

export default App;
