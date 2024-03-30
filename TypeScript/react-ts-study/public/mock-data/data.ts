import { StoreInfo } from './../../src/model/store-info';

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