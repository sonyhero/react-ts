import type {Meta} from '@storybook/react';
import {UncontrolledOnOf} from './UncontrolledOnOf';


const meta: Meta<typeof UncontrolledOnOf> = {
    title: 'UncontrolledOnOf',
    component: UncontrolledOnOf,
}
export default meta;

export const SwitchUncontrolledOnOf = () => <UncontrolledOnOf/>
