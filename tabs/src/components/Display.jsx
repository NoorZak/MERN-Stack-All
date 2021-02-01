import react, { useState } from 'react';
    
    
const Display = (props) => {
    return (
        <>
            <fieldset>{ props.message }</fieldset>
        </>
    );
};
    
export default Display;