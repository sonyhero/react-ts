type OnOfPropsType = {
    on: boolean
    setOn: () => void
}

export const OnOff = (props: OnOfPropsType) => {

    const changeColor = () => {
        props.setOn()
    }

    const onStyle = {
        padding: '2px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        backgroundColor: props.on ? 'green' : 'white' //зависимость от пропсов
    }
    const offStyle = {
        padding: '2px',
        marginLeft: '5px',
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        backgroundColor: props.on ? 'white' : 'red' //зависимость от пропсов
    }
    const indicatorStyle = {
        padding: '2px',
        marginLeft: '10px',
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={changeColor}>ON</div>
            <div style={offStyle} onClick={changeColor}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}