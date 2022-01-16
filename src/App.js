/* eslint-disable no-unused-vars */
import React from 'react';
import MainHead from './components/MainHead';
import { Feature } from './components/Feature';
import { Content } from './components/Content';
import {Team } from './components/Teams';
import {Footer } from './components/MyFooter';
import {Statistic }  from './components/Stats';
const App = () => {
    return (
        <div>
             <MainHead /> 
             <Feature />
             <Content />
             <Statistic />
             <Team />
             <Team />
             <Footer />
        </div>
    )
}

export default App;
