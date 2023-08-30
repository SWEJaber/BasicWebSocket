import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() 
{

  useEffect(() => 
  {
    
    const ws = new WebSocket("ws://localhost:8000");

    ws.onopen = event =>
    {
      console.log(event);
      ws.send("I am so excited I'm connected to the server. It's like my country just won the World cup.")
    }
    
    ws.onmessage = message =>
    {
      console.log(message.data);
    }

    return () => 
    {
      
    }
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
