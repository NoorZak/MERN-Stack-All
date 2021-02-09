import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router';
import Form from './components/Form';
import Main from './views/Main';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <Details path="products/:id" /> 
      </Router> 
      </div>
  );
}

export default App;
