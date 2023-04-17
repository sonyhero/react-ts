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

const AccordionMemo = (props: AccordionPropsType) => {

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


const AccordionTitleMemo = (props: AccordionTitlePropsType) => {

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

const AccordionBodyMemo = (props: AccordionBodyPropsType) => {

    const mappedItems = props.items.map((el, i) => <li onClick={() => props.onClick(el.value)} key={i}>{el.title}</li>)

    return (
        <ul>
            {mappedItems}
        </ul>
    )
}

export const Accordion = React.memo(AccordionMemo)
const AccordionBody = React.memo(AccordionBodyMemo)
const AccordionTitle = React.memo(AccordionTitleMemo)


