import type {Meta} from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';


const meta: Meta<typeof UncontrolledRating> = {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
}
export default meta;

export const ChangeRating = () => <UncontrolledRating/>