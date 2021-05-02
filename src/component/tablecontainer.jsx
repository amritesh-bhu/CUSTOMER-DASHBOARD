import React from "react";
import { Tablebody } from "./tablebody";

export const Tablecont = (props) => {
    const { uniquecustomer, details } = props
    return (
        <div id='tablecont'>
            <table border='2px'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Detail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        uniquecustomer.map((ele, i) => <Tablebody
                            key={i}
                            id={i} {...ele}
                            details={details} />)}
                </tbody>
            </table>
        </div>
    )
}