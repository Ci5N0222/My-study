import React, { useState } from 'react';

export default function Modal({ title, modal }) {

    return (
        modal &&
        <section className='modal'>
            <h4>{ title }</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </section>
    );
}