
import './App.css';
import {Router} from '@reach/router';

import Home from "./components/Home";
import Param from './components/Param';
import ParamColor from './components/ParamColor';

function App() {
  return (
    <div className="App">
    <Router>
      <Home path="/home" />
      <Param path ="/:var"/>
      <ParamColor path ="/:color1/:color2/:var"/>
     
    </Router>
    </div>
  );
}

export default App;
