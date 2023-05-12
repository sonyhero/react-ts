import React, {useEffect, useState} from 'react';

type ClockPropsType = {}

export const Clock: React.FC = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('clock tick')
            setDate(state => new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getTwoStringsDigits = (n: number) => n < 10 ? `0${n}` : n

    return (
        <div>
            {/*Hello, this is clock: {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}*/}
            <span>Hello, this is clock: </span>
            <span>{getTwoStringsDigits(date.getHours())}</span>
            :
            <span>{getTwoStringsDigits(date.getMinutes())}</span>
            :
            <span>{getTwoStringsDigits(date.getSeconds())}</span>
        </div>)
}