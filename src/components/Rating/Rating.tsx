import React from 'react';

type RatingPropsType = {
    star: number
    addStar: (star: number) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    const addStar0 = () => {
        props.addStar(0)
    }

    const addStar1 = () => {
        props.addStar(1)
    }
    const addStar2 = () => {
        props.addStar(2)
    }
    const addStar3 = () => {
        props.addStar(3)
    }
    const addStar4 = () => {
        props.addStar(4)
    }
    const addStar5 = () => {
        props.addStar(5)
    }

    return (
        <div>
            <button onClick={addStar0}>0</button>
            <Star selected={props.star > 0} addStar={addStar1}/>
            <Star selected={props.star > 1} addStar={addStar2}/>
            <Star selected={props.star > 2} addStar={addStar3}/>
            <Star selected={props.star > 3} addStar={addStar4}/>
            <Star selected={props.star > 4} addStar={addStar5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    addStar: () => void
}

function Star(props: StarPropsType) {

    const onclickHandler = () => {
        props.addStar()
    }
    return <span onClick={onclickHandler}> {(props.selected) ? <b>span</b> : 'star'}</span>
}