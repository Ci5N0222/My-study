import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(["강남 맛집", "용산 맛집", "홍대 맛집"]);
  const [like, setLike] = useState([0, 0, 0]);

  const titleUpdate = (i) => {
    let copy = [...title];
    copy[i] = '동내 맛집';
    setTitle(copy);
  }

  const upLike = (i) => {
    let copy = [...like];
    copy[i] += 1;
    setLike(copy);
  }

  return (
    <div className="App">

      <nav className='nav-bar'> 
        <h3>Blog!!</h3>
      </nav>

      {
        // 배열에 있는 아이템 개수 만큼 반복하는 함수를 사용하여 게시물 출력
        title.map((item, i) => (
            <section className='contents' key={ i }>
              <h4>
                { item } 
                <span onClick={() => titleUpdate(i) }>수정</span>
              </h4>
              <span onClick={() => upLike(i) }>❤</span> { like[i] }
              <p>2월 17일</p>
            </section>
          ))
      }

    </div>
  );
}

export default App;
