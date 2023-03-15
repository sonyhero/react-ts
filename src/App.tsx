import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/OnOf/OnOf';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {


    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [star, setStar] = useState<number>(0)

    const switchCollapsed = () => {
        setCollapsed(!collapsed)
    }

    const addStar = (star: number) => {
        setStar(star)
    }


    return (
        <div className={'App'}>
            <OnOff/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            <UncontrolledRating/>
            <Accordion titleValue={'book'} collapsed={collapsed} switchCollapsed={switchCollapsed}/>
            <Rating star={star} addStar={addStar}/>
        </div>
    )
}

export default App;
