import type {Meta} from '@storybook/react';
import React, {useEffect, useState} from "react";

const meta: Meta = {
    title: 'UseEffectDemo',
}
export default meta

const generateNumber = () => {
    return 1
}

export const UseEffectExample = () => {
    const [count, setCount] = useState<number>(generateNumber)
    const [fakeCount, setFakeCount] = useState<number>(generateNumber)

    useEffect(() => {
        console.log('useEffect every render')
        document.title = count.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render')
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect render on setCount')
        document.title = count.toString()
    }, [count])

    return (
        <>
            <div>
                <button onClick={() => setCount(state => state + 1)}>increment</button>
                {count}
            </div>
            <div>
                <button onClick={() => setFakeCount(state => state + 1)}>fake increment</button>
                {fakeCount}
            </div>

        </>)
}