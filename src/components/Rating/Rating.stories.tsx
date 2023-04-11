import type {Meta} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Rating, RatingValueType} from './Rating';
import {useState} from 'react';


const meta: Meta<typeof Rating> = {
    title: 'Rating',
    component: Rating,
}
export default meta;

const callback = action('add rating stars')
export const EmptyRating = () => <Rating value={0} setValue={callback}/>
export const Rating1 = () => <Rating value={1} setValue={callback}/>
export const Rating2 = () => <Rating value={2} setValue={callback}/>
export const Rating3 = () => <Rating value={3} setValue={callback}/>
export const Rating4 = () => <Rating value={4} setValue={callback}/>
export const Rating5 = () => <Rating value={5} setValue={callback}/>
export const ChangeRating = () =>{

    const [value, setValue] = useState<RatingValueType>(0)

    return (
        <Rating value={value} setValue={setValue}/>
    )
}
