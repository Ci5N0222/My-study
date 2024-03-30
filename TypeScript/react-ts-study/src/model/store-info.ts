// 2가지 형식으로 타입을 지정할 수 있음
// type, interface

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


export type ApiResponse<T> = {
    data: T[],
    totalPage: number,
    page: number
}

export type StoreInfoResponse = ApiResponse<StoreInfo>
export type MenuResponse = ApiResponse<Menu>

