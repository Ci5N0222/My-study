import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';

function App() {

  const [title, setTitle] = useState(["강남 맛집", "홍대 맛집", "용산 맛집"]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [input, setInput] = useState('');

  // Array 타입의 스테이트를 변경하기 위한 방법
  const titleDelete = (i) => {
    let copy = [...title];
    copy.splice(i, 1);
    setTitle(copy);
  }

  const upLike = (i) => {
    // Spread opertor를 사용하여 기존 배열과 다른 배열로 deep copy 한다.
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

  const textSaveHandler = () => {
    let copy = [input, ...title];
    setTitle(copy);
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
                
              </h4>
              <span onClick={() => upLike(i) }>❤</span> { like[i] }
              <p>
                <span className='delete' onClick={() => titleDelete(i) }>삭제 </span>
                <span>2024-04-23</span>
              </p>

            </section>
          ))
      }

      <Modal title={ modalTitle } modal={ modal } />
      <div className='input-box'>
        <input type="text" onChange={(e) => { setInput(e.target.value) }}/>
        <button onClick={() => { textSaveHandler() }}>저장</button>
      </div>
    </div>
  );
}

export default App;
