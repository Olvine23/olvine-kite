import React from 'react';
import { Header } from './Header';
import {Nav } from './Nav'
import stadium from '../images/bg.jpg';
const MainHead = () => {
    return (
        <div className='relative '>
            <img src={stadium} className="absolute  inset-0 object-cover w-full h-full" alt="" />
            <span id="blackOverlay" class="w-full h-full absolute bg-black opacity-90"></span>
            <Nav />
            <Header />
         </div>
    )
}

export default MainHead;
