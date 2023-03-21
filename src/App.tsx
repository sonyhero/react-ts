import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOf/OnOf';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';

function App() {


    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState<RatingValueType>(0)

    const switchCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={'App'}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <Accordion titleValue={'book'} collapsed={collapsed} switchCollapsed={switchCollapsed}/>
            <Rating value={value} setValue={setValue}/>
        </div>
    )
}

export default App;
