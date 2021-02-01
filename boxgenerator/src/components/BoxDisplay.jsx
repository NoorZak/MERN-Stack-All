import react, { useState } from 'react';

import styless from './BoxDisplay.module.css';
    
    
const BoxDisplay = (props) => {
  
    return (
        <>

            {
                    props.color.map( (current, index) =>
                    <div className={styless.box} style={{...current}}>            
                 
                   
                    </div>  
                    )
                }
          </>
    );
};
    
export default BoxDisplay;