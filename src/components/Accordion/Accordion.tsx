import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    switchCollapsed: ()=>void
}

type AccordionTitlePropsType = {
    title: string
    switchCollapsed:()=>void
}

function Accordion(props: AccordionPropsType) {

    const setCollapsedHandler = () => {
        props.switchCollapsed()
    }

    return (
        <div>
            <AccordionTitle switchCollapsed={setCollapsedHandler  }  title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitlePropsType) {

    const onClickHandler = () => {
      props.switchCollapsed()
    }

    return (
        <h3 onClick={onClickHandler}>--{props.title}--</h3>
    )
}

function AccordionBody() {

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion;

