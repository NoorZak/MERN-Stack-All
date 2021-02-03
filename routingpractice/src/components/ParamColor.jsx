import React from 'react'

const ParamColor = (props) => {
    {{var x =isNaN(props.var) ? "word" : "number"}}
    const style = {
        background: props.color2,
        color: props.color1
    }
    return (
        // style = {{background :props.color ,background :props.color }}
        <h1 style = {style}>
           The {x} is {props.var} 
        </h1>
    )
}

export default ParamColor;
