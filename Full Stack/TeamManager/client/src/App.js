import './App.css';
import {Router, Redirect,Link} from "@reach/router";

//View imports
import ManagePlayers from "./views/ManagePlayers.jsx";
import ManageStatus from "./views/ManageStatus.jsx";

function App() {
  return (
    <div className="App" >
      <nav>
        <Link
            to="/players/list"
        >Manage Players</Link>
        <h1>Team Manager</h1>
        <Link
            to="/status"
        >Manage Player Status</Link>
      </nav>
      
      <Router>
        <ManagePlayers path="/players/*"/>
        <ManageStatus path="/status/*"/>
        <Redirect noThrow from="/" to="/players"/>
      </Router>
    </div>
  );
}

export default App;