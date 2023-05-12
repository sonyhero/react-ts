import type {Meta} from '@storybook/react';
import React from 'react';
import {Clock} from './Clock';

const meta: Meta<typeof Clock> = {
    title: 'Clock',
    component: Clock,
}
export default meta

export const ClockExample = () => {
    return (
        <Clock/>

    )
}



