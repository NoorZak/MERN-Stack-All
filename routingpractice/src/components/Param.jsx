import React from 'react'

const Param = (props) => {
    {{var x =isNaN(props.var) ? "word" : "number"}}
    return (
        <h1>
           The {x} is {props.var} 
        </h1>
    )
}

export default Param
