import React, {useState, KeyboardEvent, useEffect} from 'react';
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
export const Select = React.memo(SelectMemo)

function SelectMemo(props: SelectPropsType) {
    console.log('Render Select')
    const [collapsed, setCollapsed] = useState(true)
    const [hovValue, setHovValue] = useState(props.value)

    useEffect(() => {
        setHovValue((props.value))
    }, [props.value])

    const selectedItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hovValue)
    const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovValue) {
                    const precedentElement = e.key === 'ArrowDown'
                        ?
                        props.items[i + 1]
                        :
                        props.items[i - 1]
                    if (precedentElement) {
                        props.onChange(precedentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapsed(false)
        }
    }
    const setCollapsedHandler = () => setCollapsed(!collapsed)

    const mappedItems = props.items.map(el => {
            const onClickHandler = () => {
                props.onChange(el.value)
                setCollapsed(!collapsed)
            }
            const onMouseEnterHandler = () => {
                setHovValue(el.value)
            }
            return (
                <div onMouseEnter={onMouseEnterHandler}
                     className={s.list + ' ' + (hoveredItem === el ? s.selected : '')}
                     key={el.value}
                     onClick={onClickHandler}
                >
                    {el.title}
                </div>
            )
        }
    )
    return (
        <div className={s.select}
             tabIndex={0}
             onKeyDown={onKeyDown}
        >
            <div className={s.main}
                 onClick={setCollapsedHandler}>
                {selectedItem && selectedItem.title}
            </div>
            {!collapsed && <div className={s.items}>{mappedItems}</div>}
        </div>
    )
}
