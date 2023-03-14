import React, {useState} from 'react';

type UncontrolledAccordionType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionType) => {
    
    const [collapsed, setCollapsed] = useState(true)

    const toggleSwitch = () => {
        setCollapsed(!collapsed)
    }


    return (
        <div>
            <AccordionTitle toggleSwitch={toggleSwitch} title={props.titleValue}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    toggleSwitch: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.toggleSwitch()
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

