import React from 'react';
import './App.css';
import {OnOff} from './components/OnOf/OnOf';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {
    console.log('App rendering')

    return (
        <div className={'App'}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <Accordion titleValue={'book'} collapsed={true}/>
            <Rating value={1}/>
        </div>
    )
}

export default App;
