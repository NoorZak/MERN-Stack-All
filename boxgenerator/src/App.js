import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
function App() {
 
  const [currentColor, setCurrentColor] = useState([]);
 
  const youveGotMail = ( newColor ) => {
 
    
  const arr = currentColor.slice(); ;
  
  arr.push({
    background: newColor,
    height: parseInt("50px"),
    width: parseInt("50px")
});
  //arr.push(newColor);
  setCurrentColor(arr);

  }
  return (
    <div className="App">
     <>
          <BoxForm onNewColor={ youveGotMail } />
          <BoxDisplay color={ currentColor } />
      </>
   
    </div>
  );
}

export default App;
