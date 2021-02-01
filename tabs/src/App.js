import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import Display from './components/Display';
import react, { useState } from 'react';

function App() {
  const [msg , setMsg]=useState("");
 
  const youveGotMail = ( newMessage ) => {
    setMsg( newMessage );
}

  
  return (
    <div className="App">
      <Tab onNewMessage={youveGotMail}/>
      <Display message={msg} />
    
    </div>
  );
}

export default App;
