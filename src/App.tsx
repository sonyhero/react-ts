import React from 'react';
import './App.css';
import {OnOff} from './components/OnOf/OnOf';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';




function App() {
    console.log('App rendering')

    return (
        <div>
            <OnOff/>

            <UncontrolledAccordion titleValue={'Menu'}/>
            <UncontrolledAccordion titleValue={'Users'}/>
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    )
}

// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//     console.log("PageTitle rendering")
//     return <h1>{props.title}</h1>
// }

export default App;
