import React, { useState } from 'react';
import MessageFormComponent from './components/MessageFormComponent';
import MessageDisplayComponent from './components/MessageDisplayComponent';
    
function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  
  return (
      <>
          <MessageFormComponent onNewMessage={ youveGotMail } />
          <MessageDisplayComponent message={ currentMsg } />
      </>
  );
}
export default App;