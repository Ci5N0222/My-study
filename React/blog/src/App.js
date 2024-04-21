import { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(["강남 맛집", "홍대 맛집", "용산 맛집"]);
  const [like, setLike] = useState([0, 0, 0]);

  // Array 타입의 스테이트를 변경하기 위한 방법
  const titleUpdate = (i) => {
    // Spread opertor를 사용하여 기존 배열과 다른 배열로 deep copy 한다.
    let copy = [...title];
    copy[i] = '동내 맛집';
    setTitle(copy);
  }
  const upLike = (i) => {
    let copy = [...like];
    copy[i] += 1;
    setLike(copy);
  }

  const ascSort = () => {
      let copy = [...title];
      copy.sort();
      setTitle(copy);
  }

  const descSort = () => {
    let copy = [...title];
    copy.sort((a,b) => {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    });
    setTitle(copy);
}

  return (
    <div className="App">

      <nav className='nav-bar'> 
        <h3>Blog!!</h3>
      </nav>
      <span onClick={ ascSort }>가나다 순으로 정렬</span>　　　　　　　　
      <span onClick={ descSort }>다나가 순으로 정렬</span>
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
