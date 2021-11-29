import React from "react";
import {Link} from "react-router-dom"

const Snicker = ({name}) => {
    return (
        <div>
        <h1>{name}</h1>
        <Link to='/'> Back </Link>
        </div>
    )
}

export default Snicker