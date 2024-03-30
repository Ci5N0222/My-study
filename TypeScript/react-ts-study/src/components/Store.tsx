import React from 'react';
import { Address, StoreInfo } from '../model/store-info';

interface OwnProps {
    info: StoreInfo
    // 함수의 매개변수와 리턴값을 지정
    changeAddress(address:Address): void
}

const Store:React.FC<OwnProps> = ({ info }) => {
    return (
        <div>
            { info.name }
        </div>
    );
}

export default Store