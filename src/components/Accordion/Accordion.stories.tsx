import type {Meta} from '@storybook/react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';


const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
}


const callBack = action('open list')

export const AccordionOn = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={true} switchCollapsed={callBack}
    />;

export const AccordionOff = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={false}
        switchCollapsed={callBack}
    />;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion
            titleValue={'Menu'}
            collapsed={value}
            switchCollapsed={() => setValue(!value)}
        />)
}

export default meta;