import React, {useState} from 'react';
import s from './Select.module.css'

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
type ItemType = {
    title: string
    value: any
}

export function Select(props: SelectPropsType) {
    const [collapsed, setCollapsed] = useState(true)

    const setCollapsedHandler = () => setCollapsed(!collapsed)

    const mappedItems = props.items.map(el => {
        const onClickHandler = () => {
            props.onChange(el.title)
            setCollapsed(!collapsed)
        }
            return (
                <div className={s.list} key={el.value} onClick={onClickHandler}>{el.title}</div>
            )
        }
    )
    return (
        <div className={s.wrapper}>
            <div className={s.title} onClick={setCollapsedHandler}>{props.value}</div>
            <div>{!collapsed && mappedItems}</div>
        </div>
    )
}
