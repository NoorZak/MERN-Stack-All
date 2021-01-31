import React, {useState} from 'react';

import HookForm from './components/HookForm.jsx';
import DataForm from './components/DataForm';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passConfirmation: ""
  });

  return (
    <div className="App">
      <HookForm inputs={state} setInputs={setState}/>
      <DataForm data={state}/>
    </div>
  );
}

export default App;
