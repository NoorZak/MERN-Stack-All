import logo from './logo.svg';
import './App.css';
import Tab from './components/Tab';
import Display from './components/Display';
import react, { useState } from 'react';

function App() {
  const [msg , setMsg]=useState("");
 
  const alterMsg = ( newMessage ) => {
    setMsg( newMessage );
}

  
  return (
    <div className="App">
      <Tab onNewMessage={alterMsg}/>
      <Display message={msg} />
    
    </div>
  );
}

export default App;
