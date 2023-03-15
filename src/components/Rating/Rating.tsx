import React from 'react';

type RatingPropsType = {
    star: number
    addStar: (star: number) => void
}

export function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    const addStarHandler0 = () => {
        props.addStar(0)
    }

    const addStarHandler1 = () => {
        props.addStar(1)
    }
    const addStarHandler2 = () => {
        props.addStar(2)
    }
    const addStarHandler3 = () => {
        props.addStar(3)
    }
    const addStarHandler4 = () => {
        props.addStar(4)
    }
    const addStarHandler5 = () => {
        props.addStar(5)
    }

    return (
        <div>
            <button onClick={addStarHandler0}>0</button>
            <Star selected={props.star > 0} addStar={addStarHandler1}/>
            <Star selected={props.star > 1} addStar={addStarHandler2}/>
            <Star selected={props.star > 2} addStar={addStarHandler3}/>
            <Star selected={props.star > 3} addStar={addStarHandler4}/>
            <Star selected={props.star > 4} addStar={addStarHandler5}/>
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
    return (props.selected)
        ?
        <span onClick={onclickHandler}><b>star</b> </span>
        :
        <span onClick={onclickHandler}>star </span>
}