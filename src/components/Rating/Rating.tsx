import React from "react";

export function Rating() {
    console.log('Rating render')
    return (
        <>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </>
    )
}

function Star() {
    console.log("Star rendering")
    return (
        <div>
            Star
        </div>
    )
}