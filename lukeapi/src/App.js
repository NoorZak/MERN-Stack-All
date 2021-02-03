import React, { useState } from 'react';
import './App.css';
import People from './components/People';
import { Router } from '@reach/router';
import Main from './components/Main';

function App() {

  const [item, setItem] = useState({
    itemName: "",
    itemId: ""
  })

  return (
    <div className="App">
      <Router>
      <Main path="/" />
     
        <People path="/people/:id" />
     
      </Router>
      
    </div>
  );
}

export default App;