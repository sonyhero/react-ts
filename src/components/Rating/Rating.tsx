import React from 'react';

type RatingPropsType = {
    star: number
    addStar: (star: number) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')
    return (
        <div>
            <div>
                <Star selected={props.star > 0} addStar={props.addStar} value={1}/>
                <Star selected={props.star > 1} addStar={props.addStar} value={2}/>
                <Star selected={props.star > 2} addStar={props.addStar} value={3}/>
                <Star selected={props.star > 3} addStar={props.addStar} value={4}/>
                <Star selected={props.star > 4} addStar={props.addStar} value={5}/>
            </div>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1|2|3|4|5
    addStar: (value: 1|2|3|4|5) => void
}

function Star(props: StarPropsType) {

    const onclickHandler = () => {
        props.addStar(props.value)
    }
    return <span onClick={onclickHandler}> {(props.selected) ? <b>star</b> : 'star'}</span>
}