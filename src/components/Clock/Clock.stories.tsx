import type {Meta} from '@storybook/react';
import React, {useState} from 'react';
import {Clock} from './Clock';

const meta: Meta<typeof Clock> = {
    title: 'Clock',
    component: Clock,
}
export default meta

export const ClockExample = () => {

    const [isAnalog, setIsAnalog] = useState(false)

    return (
        <div>
            <button onClick={()=>setIsAnalog(!isAnalog)}>Change clock</button>
            <Clock isAnalog={isAnalog}/>
        </div>
    )
}



