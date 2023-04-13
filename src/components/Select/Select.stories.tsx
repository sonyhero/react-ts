import type {Meta} from '@storybook/react';
import {Select} from './Select';
import {useState} from 'react';


const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
}
export default meta;


const items = [
    {value: '1', title: 'Cola'},
    { value: '2', title: 'Steak'},
    { value: '3', title: 'Salad'}
]

export const ItemSelect = () => {
    const [value, setValue] = useState<any>('2')

    return (
        <Select
            value={value}
            items={items}
            onChange={setValue}
    />
    )
}
