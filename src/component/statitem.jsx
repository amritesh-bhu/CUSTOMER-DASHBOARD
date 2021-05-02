import React from "react";

export const Statitem = (props) => {
    //const { }
    return (
        <div className='statitm'>
            <h1>{props.stats}</h1>
            <h1>{props.greet}</h1>
        </div>
    )
}