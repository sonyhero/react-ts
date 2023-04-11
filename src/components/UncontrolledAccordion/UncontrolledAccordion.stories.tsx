import type {Meta} from '@storybook/react';
import {UncontrolledAccordion} from './UncontrolledAccordion';


const meta: Meta<typeof UncontrolledAccordion> = {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}
export default meta;

export const SwitchUncontrolledAccordion = () => {
    return (
        <UncontrolledAccordion titleValue={'BOOK'}/>
    )
}