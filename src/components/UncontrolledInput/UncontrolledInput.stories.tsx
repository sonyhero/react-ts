import type {Meta} from '@storybook/react';
import {useRef, useState} from 'react';


const meta: Meta = {
    title: 'Input',
    // component: UncontrolledOnOf,
}
export default meta;

export const UncontrolledInput = () => <input/>
export const UncontrolledInputWithState = () => {
    const [value, setValue] = useState<string>()
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/> - {value}
        </div>
    )
}

export const GetValueUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>()
    const refInput = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = refInput.current as HTMLInputElement
        setValue(el.value)
    }

    return (
        <div>
            <input ref={refInput}/>
            <button onChange={save}>save</button>
            - actual value: {value}
        </div>
    )
}