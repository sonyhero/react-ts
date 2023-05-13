import React, {useEffect, useState} from 'react';
import {AnalogClock} from './AnalogClock';
import {DigitalClock} from './DigitalClock';


type ClockPropsType = {
    isAnalog: boolean
}

export const Clock: React.FC<ClockPropsType> = ({isAnalog}) => {

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
            {isAnalog
                ? <AnalogClock
                    hours={date.getHours()}
                    minutes={date.getMinutes()}
                    seconds={date.getSeconds()}
                />
                : <DigitalClock
                    hours={getTwoStringsDigits(date.getHours())}
                    minutes={getTwoStringsDigits(date.getMinutes())}
                    seconds={getTwoStringsDigits(date.getSeconds())}
                />
                // <div>
                //     Hello, this is clock: {`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}
                //     <span>Hello, this is clock: </span>
                //     <span>{getTwoStringsDigits(date.getHours())}</span>
                //     :
                //     <span>{getTwoStringsDigits(date.getMinutes())}</span>
                //     :
                //     <span>{getTwoStringsDigits(date.getSeconds())}</span>
                //
                // </div>
            }
        </div>
    )
}