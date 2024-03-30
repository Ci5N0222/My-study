// type 형식으로 지정
export type StoreInfo = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
}

export type Address = {
    city: string;
    detail: string;
    zipCode?: number;   // ? : 값이 있을 수도 있고 없을 수도 있을 때 사용(주의)
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}

// 미리 정해둔 타입에서 안쓰는 타입을 삭제
export type AddressWithoutZip = Omit<Address,'zipcode'>

// 미리 정해둔 타입에서 사용하고 싶은 타입을 추가
export type RestaurantOnlyCategory = Pick<StoreInfo, 'category'>

// Api 데이터 사용법
export type ApiResponse<T> = {
    data: T[],
    totalPage: number,
    page: number
}

export type StoreInfoResponse = ApiResponse<StoreInfo>
export type MenuResponse = ApiResponse<Menu>

