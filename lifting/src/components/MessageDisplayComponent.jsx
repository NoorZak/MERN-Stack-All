import react, { useState } from 'react';
    
    
const MessageDisplayComponent = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <pre>{ props.message }</pre>
        </>
    );
};
    
export default MessageDisplayComponent;