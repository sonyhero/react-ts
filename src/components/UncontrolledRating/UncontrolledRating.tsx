import React, {useState} from 'react';

export function UncontrolledRating() {

    const [star, setStar] = useState(0)

    return (
        <div>
            <button onClick={() => setStar(0)}>0</button>
            <Star selected={star > 0} setStar={() => setStar(1)}/>
            <Star selected={star > 1} setStar={() => setStar(2)}/>
            <Star selected={star > 2} setStar={() => setStar(3)}/>
            <Star selected={star > 3} setStar={() => setStar(4)}/>
            <Star selected={star > 4} setStar={() => setStar(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setStar: () => void
}

function Star(props: StarPropsType) {

    const onClickHandler = () => {
        props.setStar()
    }

    return (props.selected)
        ?
        <span onClick={onClickHandler}><b>star</b> </span>
        :
        <span onClick={onClickHandler}>star </span>
}