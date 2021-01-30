import logo from './logo.svg';
import './App.css';
import React from 'react'; 

import HelloComponent from './components/HelloComponent';
import ToDoComponent from './components/ToDo';
function App() {
  return (
    <div className="App">
     
     <HelloComponent />
      <ToDoComponent/>
      </div>
  );
}

export default App;
