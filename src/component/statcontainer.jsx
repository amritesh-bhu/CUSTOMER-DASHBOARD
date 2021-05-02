import React from "react";
import { Statitem } from "./statitem";

export const Statcontainer = (props) => {

    const { totalAmount, datalength, uniquecustomer } = props

    return (
        <div id='statcont'>
            <Statitem greet='Orders' stats={datalength} />
            <Statitem greet='Amount' stats={totalAmount} />
            <Statitem greet='customers' stats={uniquecustomer.length} />

        </div>
    )
}