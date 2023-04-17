import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {useState} from 'react';
import {Accordion} from "./Accordion";


const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion,
}


const callBack = action('open list')
const onClickCallBack = action('items clicked')
const items = [
    {title: 'Cola', value: 1},
    {title: 'Steak', value: 2},
    {title: 'Salad', value: 3}
]

export const AccordionOn = () =>
    <Accordion
        titleValue={'Menu'}
        collapsed={true}
        switchCollapsed={callBack}
        items={[]}
        onClick={onClickCallBack}
    />;

export const AccordionOff = () => <Accordion
    titleValue={'Menu'}
    collapsed={false}
    switchCollapsed={callBack}
    items={items}
    onClick={onClickCallBack}
/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return (
        <Accordion
            titleValue={'Menu'}
            collapsed={value}
            switchCollapsed={() => setValue(!value)}
            items={items}
            onClick={onClickCallBack}
        />)
}

export default meta;