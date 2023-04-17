import React, {useReducer} from 'react';
import {reducer, UncontrolledAccordionAC} from './reducer';

type UncontrolledAccordionType = {
    titleValue: string
}

const UncontrolledAccordionMemo = (props: UncontrolledAccordionType) => {
    const [state, dispatchCollapsed] = useReducer(reducer, {
        collapsed: false
    })
    const setCollapsedHandler = () => {
        return dispatchCollapsed(UncontrolledAccordionAC())
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

function AccordionTitleMemo(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.setCollapsed()

    return (
        <h3 onClick={onClickHandler}>--{props.title}--</h3>
    )
}

function AccordionBodyMemo() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccordionMemo)
const AccordionBody = React.memo(AccordionBodyMemo)
const AccordionTitle = React.memo(AccordionTitleMemo)

