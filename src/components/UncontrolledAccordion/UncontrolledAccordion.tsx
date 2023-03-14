import React, {useState} from 'react';

type UncontrolledAccordionType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionType) => {
    
    const [collapsed, setCollapsed] = useState(true)
    
    const toggleSwitch = (collapsed: boolean) => {
      setCollapsed(!collapsed)
    }

    const toggleSwitchCallback = () => {
        toggleSwitch(collapsed)
    }


    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={toggleSwitchCallback}>toggle</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3>--{props.title}--</h3>
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

