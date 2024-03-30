import React from 'react';
import { Menu } from '../model/store-info';

// // extends : 미리 정해둔 Menu 타입 사용
// interface OwnProps extends Menu {
//     // 미리 정해둔 타입 Menu 이외에 추가하고 싶은 타입 작성
//     showBestMenuName(name:string): string
// }

type OwnProps = Menu & {
    showBestMenuName(name:string): string
}

const BestMenu:React.FC<OwnProps> = ({ name, category, price, showBestMenuName }) => {
    return (
        <div>
            { name }
        </div>
    );
}

export default BestMenu