import React, {useReducer} from 'react';
import {reducer, UncontrolledAccordionAC} from './reducer';

type UncontrolledAccordionType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: UncontrolledAccordionType) => {
    const [state, dispatchCollapsed] = useReducer(reducer, {
        collapsed: false
    })
    const setCollapsedHandler = () => {
        return  dispatchCollapsed(UncontrolledAccordionAC())
    }

    return (
        <div>
            <AccordionTitle setCollapsed={setCollapsedHandler} title={props.titleValue}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.setCollapsed()

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

