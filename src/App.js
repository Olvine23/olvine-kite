/* eslint-disable no-unused-vars */
import React from 'react';
import MainHead from './components/MainHead';
import { Feature } from './components/Feature';
import { Content } from './components/Content';
import {Team } from './components/Teams';
import {Footer } from './components/MyFooter';
import {Statistic }  from './components/Stats';
import {Teams_two } from './components/Teams_two';
const App = () => {
    return (
        <div>
             <MainHead /> 
             <Feature />
             <Content />
             <Statistic />
             <Team />
             <Footer />
        </div>
    )
}

export default App;
