import React from 'react';

type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    switchCollapsed: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

type AccordionTitlePropsType = {
    title: string
    switchCollapsed: () => void
}

function Accordion(props: AccordionPropsType) {

    const setCollapsedHandler = () => {
        props.switchCollapsed()
    }

    return (
        <div>
            <AccordionTitle switchCollapsed={setCollapsedHandler} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    const mappedItems = props.items.map((el,i) => <li onClick={()=>props.onClick(el.value)} key={i}>{el.title}</li>)

    return (
        <ul>
            {mappedItems}
        </ul>
    )
}

export default Accordion;

