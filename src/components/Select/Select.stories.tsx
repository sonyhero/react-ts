import type {Meta} from '@storybook/react';
import {Select} from './Select';
import {useState} from 'react';


const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
}
export default meta;


const items = [
    {title: 'Cola', value: 1},
    {title: 'Steak', value: 2},
    {title: 'Salad', value: 3}
]

export const ItemSelect = () => {
    const [value, setValue] = useState<any>('Select')

    return (
        <Select
            value={value}
            items={items}
            onChange={setValue}
    />
    )
}
