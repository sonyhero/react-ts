import React from 'react';

type RatingPropsType = {
    value: RatingValueType
    setValue: (value: RatingValueType) => void
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

const RatingMemo = (props: RatingPropsType) => {
    console.log('Rating rendering')
    return (
        <div>
            <div>
                <Star selected={props.value > 0} addStar={props.setValue} value={1}/>
                <Star selected={props.value > 1} addStar={props.setValue} value={2}/>
                <Star selected={props.value > 2} addStar={props.setValue} value={3}/>
                <Star selected={props.value > 3} addStar={props.setValue} value={4}/>
                <Star selected={props.value > 4} addStar={props.setValue} value={5}/>
            </div>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    addStar: (value: RatingValueType) => void
}

const StarMemo = (props: StarPropsType) => {

    const onclickHandler = () => {
        props.addStar(props.value)
    }
    return <span onClick={onclickHandler}> {(props.selected) ? <b>star</b> : 'star'}</span>
}

export const Rating = React.memo(RatingMemo)
const Star = React.memo(StarMemo)