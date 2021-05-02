import React from "react";

export const Tablebody = (props) => {
    const { id, Name, Phone, details } = props
    return (
        <tr>
            <td>{id}</td>
            <td>{Name}</td>
            <td>{Phone}</td>
            <td><button onClick={() => details(Phone)}>show</button></td>
        </tr>
    )
}