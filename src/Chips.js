import React from "react";
import {Link} from "react-router-dom"

const Chips = ({name}) => {
    return (
        <div>
        <h1>{name}</h1>
        <Link to='/'> Back </Link>
        </div>
    )
}

export default Chips