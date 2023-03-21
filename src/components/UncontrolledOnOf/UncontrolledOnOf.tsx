import {useState} from 'react';

export const UncontrolledOnOff = () => {

    const [on, setOn] = useState(false)

    const changeColorOn = () => {
        setOn(true)

    }
    const changeColorOff = () => {
        setOn(false)
    }

    const onStyle = {
        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        backgroundColor: on ? 'green' : 'white' //зависимость от пропсов
    }
    const offStyle = {
        padding: '2px',
        marginLeft: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        backgroundColor: on ? 'white' : 'red' //зависимость от пропсов
    }
    const indicatorStyle = {
        padding: '2px',
        marginLeft: '10px',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={changeColorOn}>ON</div>
            <div style={offStyle} onClick={changeColorOff}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>

    )
}