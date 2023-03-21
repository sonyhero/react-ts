import React, {useState} from 'react';

export function UncontrolledRating() {

    const [star, setStar] = useState(0)

    return (
        <div>
            <button onClick={() => setStar(0)}>0</button>
            <Star selected={star > 0} setStar={setStar} value={1}/>
            <Star selected={star > 1} setStar={setStar} value={2}/>
            <Star selected={star > 2} setStar={setStar} value={3}/>
            <Star selected={star > 3} setStar={setStar} value={4}/>
            <Star selected={star > 4} setStar={setStar} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setStar: (value: number) => void
}

function Star(props: StarPropsType) {

    const onClickHandler = () => {
        props.setStar(props.value)
    }

    return <span onClick={onClickHandler}>{(props.selected) ? <b>star</b> : 'star'} </span>
}