import type {Meta} from '@storybook/react';
import {ChangeEvent, useRef, useState} from 'react';

const meta: Meta = {
    title: 'Input',
    // component: UncontrolledOnOf,
}
export default meta;

export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithState = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/> - {value}
        </div>
    )
}
export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('')
    const refInput = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = refInput.current as HTMLInputElement
        setValue(el.value)
        console.log()
    }
    return (
        <div>
            <input ref={refInput}/>
            <button onClick={save}>save</button>
            - actual value: {value}
        </div>
    )
}
export const ControlledInput = () => {
    const [value, setValue] = useState<string>('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (
        <div>
            <input value={value} onChange={onChangeHandler}/>
        </div>
    )
}
export const ControlledCheckBox = () => {
    const [value, setValue] = useState<boolean>(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)

    return (
        <div>
            <input type={'checkbox'} checked={value} onChange={onChangeHandler}/>
        </div>
    )
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string>('1')

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChangeHandler}>
            <option value="0" >none</option>
            <option value="1">Minsk</option>
            <option value="2">New-York</option>
            <option value="3">Kiev</option>
        </select>
    )
}

