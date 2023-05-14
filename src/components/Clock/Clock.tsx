import React, {useEffect, useState} from 'react';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from './DigitalClock';


type ClockPropsType = {
    mode: string
}

export const Clock: React.FC<ClockPropsType> = ({mode}) => {

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

    let view
    switch (mode) {
        case 'digital':
            view = <DigitalClock
                hours={getTwoStringsDigits(date.getHours())}
                minutes={getTwoStringsDigits(date.getMinutes())}
                seconds={getTwoStringsDigits(date.getSeconds())}
            />
            break
        case 'analog':
        default:
            view = <AnalogClock
                hours={date.getHours()}
                minutes={date.getMinutes()}
                seconds={date.getSeconds()}
            />
    }

    return (
        <div>
            {view}
        </div>
    )
}