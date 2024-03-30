import React, { useState } from 'react';
import './App.css';
import Store from './components/Store';
import { Address, StoreInfo } from './model/store-info';
import BestMenu from './components/BestMenu';

// 'model/store-info.ts' 에서 타입을 미리 만들어 사용
let data:StoreInfo = {
  name: "Noh",
  category: "Korean",
  address: {
    city: "Bucheon",
    detail: "somewhere",
    zipCode: 23425634
  },
  menu: [
    {
      name: "부대찌개",
      price: 15000,
      category: "찌개"
    }
  ]
}

// Component 형식 타입 지정 (Component:React.FC)
const App:React.FC = () => {

  // useState에 type 적용하기
  // <type>: generic 문법, useState를 사용할 때 타입을 선언하기 위해 사용
  const [myRestaurant, setMyRestaurant] = useState<StoreInfo>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address })
  }
  
  const showBestMenuName = (name:string) => {
    return name;
  }

  return (
    <div className="App">
      <Store info={ data } changeAddress={ changeAddress }/>
      <BestMenu name="불고기피자" category="피자" price={ 20000 } showBestMenuName={ showBestMenuName }/>
    </div>
  );
}

export default App;
