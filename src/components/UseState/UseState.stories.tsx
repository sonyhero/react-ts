import type {Meta} from '@storybook/react';
import React, {useState} from "react";

const meta: Meta = {
    title: 'UseStateDemo',
}
export default meta

const generateNumber = () => {
    return 1
}

export const UseStateExample = () => {
    const [count, setCount] = useState<number>(generateNumber)

    return (
        <>
            <button onClick={() => setCount(state => state + 1)}>+</button>
            {count}
        </>)
}