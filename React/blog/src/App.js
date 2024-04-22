import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

  const [title, setTitle] = useState(["강남 맛집", "홍대 맛집", "용산 맛집"]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

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

  const modalHandler = (i) =>{
    if(modalTitle !== title[i]) {
      setModalTitle(title[i]);
      if(modal === false){
        setModal(true);
      }
    } else {
      setModal(prev => !prev);
    }
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
              <h4 onClick={() => modalHandler(i) }>
                { item } 
                <span onClick={() => titleUpdate(i) }>수정</span>
              </h4>
              <span onClick={() => upLike(i) }>❤</span> { like[i] }
              <p>2월 17일</p>
            </section>
          ))
      }
      <Modal title={ modalTitle } modal={ modal } />

    </div>
  );
}

export default App;
