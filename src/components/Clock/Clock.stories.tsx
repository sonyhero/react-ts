import type {Meta} from '@storybook/react';
import React from 'react';
import {Clock} from './Clock';

const meta: Meta<typeof Clock> = {
    title: 'Clock',
    component: Clock,
}
export default meta

export const ClockExampleAnalog = () => {

    // const [isAnalog, setIsAnalog] = useState(false)

    return (
        <div>
            {/*<button onClick={()=>setIsAnalog(!isAnalog)}>Change clock</button>*/}
            <Clock mode={'analog'}/>
        </div>
    )
}

export const ClockExampleDigital = () => {

    return (
        <div>
            <Clock mode={'digital'}/>
        </div>
    )
}



