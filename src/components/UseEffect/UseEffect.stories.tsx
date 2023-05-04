import type {Meta} from '@storybook/react';
import React, {useEffect, useState} from "react";

const meta: Meta = {
    title: 'UseEffectDemo',
}
export default meta

const generateNumber = () => {
    return 1
}

export const SimpleExample = () => {
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

export const SetTimeoutExample = () => {
    const [count, setCount] = useState<number>(generateNumber)
    const [fakeCount, setFakeCount] = useState<number>(generateNumber)

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = count.toString()
        }, 1500)
    })

    return (
        <div>
            <div>
                <button onClick={() => setCount(state => state + 1)}>
                    increment
                </button>
                {count}
            </div>
            <div>
                <button onClick={() => setFakeCount(state => state + 1)}>
                    fake increment
                </button>
                {fakeCount}
            </div>

        </div>)
}
export const SetIntervalExample = () => {
    const [count, setCount] = useState<number>(generateNumber)
    const [fakeCount, setFakeCount] = useState<number>(generateNumber)

    useEffect(() => {
        setInterval(() => {
            console.log('set interval')
            setCount(state => state + 1)
        }, 1000)
    },[])

    return (
        <div>
            <div>
                Hello, this is count: {count}, and this is fakeCount: {fakeCount}
            </div>
        </div>)
}
export const ClockExample = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            console.log('set interval')
            setDate(state => new Date())
        }, 1000)
    },[])

    return (
        <div>
            Hello, this is clock: {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
        </div>)
}