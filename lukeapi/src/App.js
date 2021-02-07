import React, { useState } from 'react';
import './App.css';
import People from './components/People';
import Planet from './components/Planet';

import { Router } from '@reach/router';
import Main from './components/Main';

function App() {

  
  return (
    <div className="App">
      <Main  />
     
      <Router>
     
        <People path="/people/:id" />
        <Planet path="/planets/:id" />
     
      </Router>
      
    </div>
  );
}

export default App;