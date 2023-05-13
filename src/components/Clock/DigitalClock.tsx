import React from 'react';
import s from './DigitalClock.module.css';

type DigitalClockPropsType = {
    hours: string | number
    minutes: string | number
    seconds: string | number
}

export const DigitalClock: React.FC<DigitalClockPropsType> = (props) => {

    const {hours, minutes, seconds} = props

    return (
        <div className={s.clock}>
            <figure>
                <div className={`${s.face} ${s.top}`}><p id="s">{seconds}</p></div>
                <div className={`${s.face} ${s.front}`}><p id="m">{minutes}</p></div>
                <div className={`${s.face} ${s.left}`}><p id="h">{hours}</p></div>
            </figure>
        </div>
    )
}