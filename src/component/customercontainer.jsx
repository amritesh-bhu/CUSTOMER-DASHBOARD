import React, { useState } from "react";
import { Search } from "./search";
import { Tablecont } from "./tablecontainer";

export const Custcontainer = (props) => {
    const { uniquecustomer, details } = props

    const [input, setinput] = useState('')
    //const [customer, setCustomer] = useState(uniquecustomer)

    const handlechange = (e) => {
        setinput(e.target.value)
    }

    const searchUser = () => {

        const cust = uniquecustomer.filter((ele) => { return ele.Name.toLowerCase().includes(input) || ele.Phone.toString().includes(input) })
        return cust

    }

    return (
        <div id='custcont'>
            <div id='headcust'><h1>Listing Users</h1></div>
            <Search handle={handlechange} />
            <Tablecont uniquecustomer={searchUser()} details={details} />
        </div>
    )
}