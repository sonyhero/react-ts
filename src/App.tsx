import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOf/OnOf';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledOnOf} from './components/UncontrolledOnOf/UncontrolledOnOf';

function App() {

    const [on, setOn] = useState<boolean>(false)
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [value, setValue] = useState<RatingValueType>(0)

    const switchCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const switchOnOf = () => {
        setOn(!on)
    }

    return (
        <div className={'App'}>
            <OnOff on={on} setOn={switchOnOf}/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <Accordion titleValue={'book'} collapsed={collapsed} switchCollapsed={switchCollapsed}/>
            <Rating value={value} setValue={setValue}/>
            <UncontrolledOnOf/>
        </div>
    )
}

export default App;
