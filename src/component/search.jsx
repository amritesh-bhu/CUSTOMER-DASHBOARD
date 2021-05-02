import React from "react";

export const Search = (props) => {
    const { handle, input } = props
    return (
        <div id='srch'>
            <input
                type='text'
                style={{ border: '5px solid rgb(119,70,70)' }}
                placeholder='Search by user or phone'
                onChange={handle}
                value={input} />
        </div>
    )
}