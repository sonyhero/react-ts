import React, {useState} from 'react';

type UncontrolledAccordionType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionType) => {
    
    const [collapsed, setCollapsed] = useState(true)

    const setCollapsedHandler = () => {
        setCollapsed(!collapsed)
    }


    return (
        <div>
            <AccordionTitle setCollapsed={setCollapsedHandler} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.setCollapsed()
    }
    return (
        <h3 onClick={onClickHandler}>--{props.title}--</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

