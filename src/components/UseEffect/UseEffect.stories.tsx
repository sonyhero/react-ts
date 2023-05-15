import type {Meta} from '@storybook/react';
import React, {useEffect, useState} from 'react';

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
        const interval = setTimeout(() => {
            console.log('setTimeout')
            document.title = count.toString()
        }, 1500)
        return () => {
            clearInterval(interval)
        }
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
        const intervalId = setInterval(() => {
            console.log('set interval')
            setCount(state => state + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <div>
            <div>
                Hello, this is count: {count}, and this is fakeCount: {fakeCount}
            </div>
        </div>)
}

export const ResetEffectExample = () => {
    const [count, setCount] = useState<number>(1)
    console.log('component rendered with' + count)

    useEffect(() => {
        console.log('Effect occurred with' + count)

        return () => {
            console.log('reset effect' + count)
        }
    }, [count])

    const counting = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div>
                Hello, this is count: {count}
                <button onClick={counting}>+</button>

            </div>
        </div>)
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState<string>('')
    console.log('component rendered with' + text)

    useEffect(() => {
        console.log('Effect occurred with' + text)
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])

    return (
        <div>
            <div>
                Hello, this is text: {text}

            </div>
        </div>)
}

export const SetTimeoutExample2 = () => {
    const [text, setText] = useState<string>('')
    console.log('component rendered with' + text)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setText('3 seconds passed')
        }, 3000)

        return () => {
            clearInterval(timeout)
        }

    }, [text])

    return (
        <div>
            <div>
                Hello, this is text: {text}

            </div>
        </div>)
}