import type {Meta} from '@storybook/react';
import {OnOff} from './OnOf';
import {useState} from 'react';


const meta: Meta<typeof OnOff> = {
    title: 'OnOff',
    component: OnOff,
}
export default meta;

export const ChangeOnOf = () => {
    const [on, setOn] = useState<boolean>(false)

    const switchOnOf = () => {
        setOn(!on)
    }

    return (
        <OnOff on={on} setOn={switchOnOf}/>
    )
}